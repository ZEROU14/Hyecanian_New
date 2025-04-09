import re
from django.forms import ValidationError
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.cache import cache
from django.contrib.auth import get_user_model
from .serializers import OTPRequestSerializer, OTPVerifySerializer, CustomUserSerializer
from .utils import generate_otp, send_otp_via_kave_negar
import logging

logger = logging.getLogger(__name__)

User = get_user_model()

class CustomUserViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        serializer = CustomUserSerializer(request.user, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class VerifyOTPView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = OTPVerifySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        phone_number = serializer.validated_data['phone_number']
        otp = serializer.validated_data['otp']

        # Retrieve OTP from cache
        saved_otp = cache.get(phone_number)
        if not saved_otp or str(saved_otp) != str(otp):
            logger.error(f"Invalid or expired OTP for phone number: {phone_number}")
            return Response({"error": "Invalid or expired OTP."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Dynamically create user if they don't exist
            user, created = User.objects.get_or_create(phone_number=phone_number)
            if created:
                user.set_password(None)  # Set a default password or handle password setting appropriately
                user.save()
        except Exception as e:
            logger.error(f"Error retrieving or creating user with phone number: {phone_number} - {e}")
            return Response({"error": "User retrieval failed."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # Generate JWT for the user
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)

        logger.info(f"OTP verified successfully for phone number: {phone_number}")
        return Response({"access_token": access_token, "refresh_token": refresh_token}, status=status.HTTP_200_OK)


def validate_iran_phone_number(value):
    pattern = re.compile(r'^09\d{9}$')
    if not pattern.match(value):
        raise ValidationError(f'{value} is not a valid Iranian phone number. It should start with 09 and have 11 digits.') 
class GenerateOTPView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = OTPRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        phone_numbers = serializer.validated_data['phone_number']
        phone_number = validate_iran_phone_number(phone_numbers)
        phone_number = serializer.validated_data['phone_number']
        
       
        otp = generate_otp()
        cache.set(phone_number, otp, timeout=300)  # Cache OTP for 5 minutes

        logger.info(f"Generated OTP for {phone_number}: {otp}")

        try:
            if send_otp_via_kave_negar(phone_number, otp):
                return Response({"message": "OTP sent successfully."}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Failed to send OTP. Please try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            logger.error(f"Failed to send OTP to {phone_number}: {e}")
            return Response({"error": "Failed to send OTP. Please try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)