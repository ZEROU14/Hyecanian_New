from rest_framework import serializers
from django.core.cache import cache
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

    class Meta(DjoserSerializer.Meta):
        model = CustomUser
        fields = ['phone_number', 'ticket_count', 'event_signup', 'event_created_by_you']
        
    def get_ticket_count(self, obj):
        # Calculate and return the count of event signups
        return obj.event_signups.count()


class OTPRequestSerializer(serializers.Serializer):
    phone_number = serializers.CharField()

class OTPVerifySerializer(serializers.Serializer):
    phone_number = serializers.CharField()
    otp = serializers.CharField()
