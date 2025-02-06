from djoser.serializers import UserCreateSerializer as DjoserUserCreateSerializer
from djoser.serializers import UserSerializer as DjoserSerializer
from rest_framework import serializers
from .models import CustomUser
from pages.serializers import EventSignUpSerializer, TicketSerializer, EventSerializer

class CustomUserCreateSerializer(DjoserUserCreateSerializer):
    class Meta(DjoserUserCreateSerializer.Meta):
        model = CustomUser
        fields = ('full_name', 'phone_number', 'password')

class CustomUserSerializer(DjoserSerializer):
    event_signup = EventSignUpSerializer(many=True, read_only=True, source='event_signups')
    ticket_count = serializers.SerializerMethodField()
    event_created_by_you = EventSerializer(many=True, read_only=True, source='event')

    class Meta(DjoserSerializer.Meta):
        model = CustomUser
        fields = ['full_name', 'phone_number', 'ticket_count', 'event_signup', 'event_created_by_you']
        
    def get_ticket_count(self, obj):
        return obj.event_signups.count()