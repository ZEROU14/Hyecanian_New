from rest_framework import serializers
from .models import *

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['id','title','price','event']

class EventSerializer(serializers.ModelSerializer):
    link = serializers.HyperlinkedIdentityField(
            view_name = 'event-detail',
            lookup_field = 'pk'
    )
        
    tickets = TicketSerializer(many=True,read_only=True)

    class Meta:
        model = Event
        fields = ['link','title','description','evtry_price','datetime_created','title_picture','seconde_picture','category','location','tickets']
    

class EventSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventSignup
        fields = ['user','first_name','last_name','age','phone_number','gender','incurace_pic','id_pic','state','ticket']

        read_only_fields = ['user','ticket']

        
    # def create(self, validated_data):
    #     event_id = self.context['event_pk']
    #     return EventSignup.objects.create(event_id = event_id ,**validated_data)
    
    
            
class CategorySeriaizer(serializers.ModelSerializer):
    link = serializers.HyperlinkedIdentityField(
        view_name = 'category-detail',
        lookup_field = 'pk',
    )
    class Meta:
        model = Category
        fields = ['link','title','description']