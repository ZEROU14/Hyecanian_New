from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import send_request, verify_payment
from pages.models import Ticket
from .models import Payment
from pages.models import EventSignup
from django.urls import reverse
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
import logging

logger = logging.getLogger(__name__)


class PaymentRequestView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, ticket_id):
        event_signup_id = request.data.get('event_signup_id')
        if not event_signup_id:
            raise ValidationError({"error": "Event sign-up ID is required."})

        try:
            event_signup = EventSignup.objects.get(id=event_signup_id)
        except EventSignup.DoesNotExist:
            raise ValidationError({"error": "Event sign-up does not exist."})

        try:
            ticket = Ticket.objects.get(id=ticket_id)
        except Ticket.DoesNotExist:
            raise ValidationError({"error": "Ticket does not exist."})

        phone_number = request.data.get('phone_number')
        if not phone_number:
            raise ValidationError({"error": "Phone number is required."})

        amount = int(ticket.price) * 10  # Assuming the Ticket model has a price field
        callback_url = request.build_absolute_uri(reverse('payment:verify'))
        sandbox = request.data.get('sandbox', False)

        result = send_request(
            amount=amount,
            description=f"Payment for {ticket.title} {phone_number}",
            mobile=phone_number,
            callback_url=callback_url,
            sandbox=sandbox
        )

        if result['status']:
            Payment.objects.create(
                phone_number=phone_number,
                ticket=ticket,
                event_signup=event_signup,
                amount=amount / 10,  # Convert back to original currency
                authority=result['authority'],
                user=request.user  # Save the user information
            )
            return Response({'payment_url': result['url']}, status=status.HTTP_200_OK)
        else:
            raise ValidationError({"error": f"Error code {result['code']}, {result['message']}"})
class PaymentVerifyView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        authority = request.GET.get('Authority')
        payment_status = request.GET.get('Status')

        if not authority or not payment_status:
            return Response({'status': False, 'message': 'Invalid payment parameters.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            payment = Payment.objects.get(authority=authority)
        except Payment.DoesNotExist:
            return Response({'status': False, 'message': 'Payment does not exist.'}, status=status.HTTP_400_BAD_REQUEST)

        sandbox = request.GET.get('sandbox', False)

        if payment_status == 'OK':
            result = verify_payment(float(payment.amount) * 10, authority, sandbox=sandbox)
            if result['status']:
                payment.is_paid = True
                payment.ref_id = result['ref_id']
                payment.save()

                if payment.event_signup:
                    payment.event_signup.is_paid = True
                    payment.event_signup.save()

                return Response({
                    'status': True,
                    'message': f"Payment successful. RefID: {result['ref_id']}",
                    'amount': float(payment.amount),
                }, status=status.HTTP_200_OK)
            else:
                return Response({
                    'status': False,
                    'message': f"Payment verification failed. Error code: {result['code']}, {result['message']}"
                }, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'status': False, 'message': 'Payment was canceled by the user.'}, status=status.HTTP_400_BAD_REQUEST)