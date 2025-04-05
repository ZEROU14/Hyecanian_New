from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import send_request, verify_payment
from pages.models import Ticket, EventSignup
from pages.serializers import EventSignUpSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from django.urls import reverse
import logging

logger = logging.getLogger(__name__)

class PaymentRequestView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, ticket_id):
        user = request.user

        try:
            ticket = Ticket.objects.get(id=ticket_id)
        except Ticket.DoesNotExist:
            logger.error(f"Ticket with id {ticket_id} does not exist.")
            raise ValidationError({"error": "Ticket does not exist."})

        phone_number = request.data.get('phone_number')
        if not phone_number:
            logger.error("Phone number is required.")
            raise ValidationError({"error": "Phone number is required."})

        amount = int(ticket.price) * 10
        callback_url = request.build_absolute_uri(reverse('payment:verify'))

        result = send_request(
            amount=amount,
            description=f"Payment for {ticket.name} {user.phone_number}",
            email=user.email,
            mobile=phone_number,
            callback_url=callback_url,
        )

        if result['status']:
            request.session['ticket_id'] = ticket_id
            request.session['phone_number'] = phone_number
            request.session['amount'] = amount

            return Response({'payment_url': result['url']}, status=status.HTTP_200_OK)
        else:
            logger.error(f"Payment request failed with error code {result['code']}.")
            raise ValidationError({"error": f"Error code {result['code']}"})

class PaymentVerifyView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        authority = request.GET.get('Authority')
        status = request.GET.get('Status')

        if not authority or not status:
            logger.error("Invalid payment parameters.")
            return Response({'status': False, 'message': 'Invalid payment parameters.'}, status=status.HTTP_400_BAD_REQUEST)

        ticket_id = request.session.get('ticket_id')
        phone_number = request.session.get('phone_number')
        amount = request.session.get('amount')

        if not all([ticket_id, phone_number, amount]):
            logger.error("Invalid session data.")
            return Response({'status': False, 'message': 'Invalid session data.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            ticket = Ticket.objects.get(id=ticket_id)
        except Ticket.DoesNotExist:
            logger.error(f"Ticket with id {ticket_id} does not exist.")
            return Response({'status': False, 'message': 'Ticket does not exist.'}, status=status.HTTP_400_BAD_REQUEST)

        user = request.user
        if status == 'OK':
            result = verify_payment(amount, authority)
            if result['status']:
                serializer = EventSignUpSerializer(data={
                    'user': user.id,
                    'ticket': ticket_id,
                    'phone_number': phone_number,
                    'is_paid': True,
                })
                if serializer.is_valid():
                    serializer.save()
                    logger.info(f"Payment successful. RefID: {result['ref_id']}")
                    return Response({'status': True, 'message': f"Payment successful. RefID: {result['ref_id']}"}, status=status.HTTP_200_OK)
                else:
                    logger.error("Event signup validation failed.")
                    return Response({'status': False, 'message': 'Event signup validation failed.'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                logger.error(f"Payment verification failed. Error code: {result['code']}")
                return Response({'status': False, 'message': f"Payment verification failed. Error code: {result['code']}"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            logger.info("Payment was canceled by the user.")
            return Response({'status': False, 'message': 'Payment was canceled by the user.'}, status=status.HTTP_400_BAD_REQUEST)