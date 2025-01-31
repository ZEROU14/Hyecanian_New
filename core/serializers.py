from djoser.serializers import UserCreateSerializer as DjoserUserCreateSerializer
from djoser.serializers import UserSerializer as DjoserSerializer
from rest_framework import serializers
from pages.serializers import EventSignUpSerializer, TicketSerializer

class UserCreatSerializer(DjoserUserCreateSerializer):
    class Meta(DjoserUserCreateSerializer.Meta):
        fields = ['id','username','password','email','first_name','last_name',]
        
        
class UserSerializers(DjoserSerializer):
    event_signup = EventSignUpSerializer(many=True, read_only=True, source='event_signups')
    ticket_count = serializers.SerializerMethodField()
    class Meta(DjoserSerializer.Meta):
        fields = ['username','email','first_name','last_name','ticket_count','event_signup']
        
    def get_ticket_count(self, obj):
         return obj.event_signups.count()