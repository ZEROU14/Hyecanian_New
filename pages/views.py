from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .models import (
    Event,
    EventSignup
)
from .serializers import (
    EventSerializer,
    EventSignUpSerializer
)

# Create your views here.
class EventViewSet(ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    
    def get_serializer_context(self):
        return {"request": self.request} 
    
    
class EventSignupViewSet(ModelViewSet):
    serializer_class = EventSignUpSerializer
    
    
    def get_queryset(self):
        event_pk = self.kwargs['event_pk']
        return EventSignup.objects.filter(event_id = event_pk).all()


    def get_serializer_context(self):
        return {'event_pk':self.kwargs['event_pk']}

    
    