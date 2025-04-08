from rest_framework import serializers
from django.core.cache import cache
from rest_framework import status
from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer as DjoserUserCreateSerializer
from djoser.serializers import UserSerializer as DjoserSerializer
from .models import CustomUser
from pages.serializers import EventSignUpSerializer, TicketSerializer, EventSerializer

User = get_user_model()

class CustomUserSerializer(DjoserSerializer):
    event_signup = EventSignUpSerializer(many=True, read_only=True, source='event_signups')
    ticket_count = serializers.SerializerMethodField()
    event_created_by_you = EventSerializer(many=True, read_only=True, source='event')
    successful_payment_ref_id = serializers.SerializerMethodField()  
    

    class Meta(DjoserSerializer.Meta):
        model = CustomUser
        fields = ['phone_number', 'ticket_count', 'event_signup', 'event_created_by_you','successful_payment_ref_id']
        
    def get_ticket_count(self, obj):
        # Calculate and return the count of event signups
        return obj.event_signups.count()


    def get_successful_payment_ref_id(self, obj):
         # Return a list of ref_ids along with the ticket names of successful payments
        successful_payments = obj.payments.filter(is_paid=True).values('ref_id', 'ticket__title')
        return [{'ref_id': payment['ref_id'], 'ticket_name': payment['ticket__title']} for payment in successful_payments]


class OTPRequestSerializer(serializers.Serializer):
    phone_number = serializers.CharField()

class OTPVerifySerializer(serializers.Serializer):
    phone_number = serializers.CharField()
    otp = serializers.CharField()
