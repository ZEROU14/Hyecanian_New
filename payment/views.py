# payment/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import send_request, verify_payment
from pages.models import Ticket,EventSignup
from pages.serializers import EventSignUpSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError

from django.urls import reverse
from django.shortcuts import redirect
from django.views import View
from django.shortcuts import render



class PaymentRequestView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, ticket_id):
        user = request.user

        try:
            ticket = Ticket.objects.get(id=ticket_id)
        except Ticket.DoesNotExist:
            raise ValidationError({"error": "Ticket does not exist."})

        phone_number = request.data.get('phone_number')
        if not phone_number:
            raise ValidationError({"error": "Phone number is required."})

        # Convert amount to Rials (assuming ticket.price is in Tomans)
        amount = int(ticket.price) * 10

        # Build absolute callback URL
        callback_url = request.build_absolute_uri(reverse('payment:verify'))

        # Send request to ZarinPal
        result = send_request(
            amount=amount,
            description=f"Payment for {ticket.name}",
            email=user.email,
            mobile=phone_number,
            callback_url=callback_url,
        )

        if result['status']:
            # Store the payment details in session for verification step
            request.session['ticket_id'] = ticket_id
            request.session['phone_number'] = phone_number
            request.session['amount'] = amount

            # Return the payment URL to redirect the user
            return Response({'payment_url': result['url']}, status=status.HTTP_200_OK)
        else:
            raise ValidationError({"error": f"Error code {result['code']}"})








class PaymentVerifyView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        authority = request.GET.get('Authority')
        status = request.GET.get('Status')

        if not authority or not status:
            return Response({'status': False, 'message': 'Invalid payment parameters.'}, status=status.HTTP_400_BAD_REQUEST)

        ticket_id = request.session.get('ticket_id')
        phone_number = request.session.get('phone_number')
        amount = request.session.get('amount')

        if not ticket_id or not phone_number or not amount:
            return Response({'status': False, 'message': 'Invalid session data.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            ticket = Ticket.objects.get(id=ticket_id)
        except Ticket.DoesNotExist:
            return Response({'status': False, 'message': 'Ticket does not exist.'}, status=status.HTTP_400_BAD_REQUEST)

        user = request.user

        if status == 'OK':
            result = verify_payment(amount, authority)
            if result['status']:
                # Create EventSignup instance
                serializer = EventSignUpSerializer(data={
                    'user': user.id,
                    'ticket': ticket_id,
                    'phone_number': phone_number,
                    'is_paid': True,
                })
                if serializer.is_valid():
                    serializer.save()
                    return Response({'status': True, 'message': f"Payment successful. RefID: {result['ref_id']}"}, status=status.HTTP_200_OK)
                else:
                    return Response({'status': False, 'message': 'Event signup validation failed.'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'status': False, 'message': f"Payment verification failed. Error code: {result['code']}"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'status': False, 'message': 'Payment was canceled by the user.'}, status=status.HTTP_400_BAD_REQUEST)
