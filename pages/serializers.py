from rest_framework import serializers
from .models import *

class EventSerializer(serializers.ModelSerializer):
    link = serializers.HyperlinkedIdentityField(
            view_name = 'event-detail',
            lookup_field = 'pk'
    )
    class Meta:
        model = Event
        fields = ['link','title','description','evtry_price','datetime_created','title_picture','seconde_picture','category','location']
   

class EventSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventSignup
        fields = ['name','last_name','age','phone_number','gender','incurace_pic','id_pic','state']

        
    def create(self, validated_data):
        event_id = self.context['event_pk']
        return EventSignup.objects.create(event_id = event_id ,**validated_data)