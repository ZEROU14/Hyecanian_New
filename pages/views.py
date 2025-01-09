from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .models import (
    Event,
)
from .serializers import (
    EventSerializer,
)

# Create your views here.
class EventViewSet(ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    
    def get_serializer_context(self):
        return {"request": self.request} 