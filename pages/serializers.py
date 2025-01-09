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
   