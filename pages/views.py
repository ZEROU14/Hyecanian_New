from django.forms import ValidationError
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .premissions import ReadOnlyorAdmin

from .models import (
    Event,
    EventSignup,
    Category,
    Ticket
)
from .serializers import (
    EventSerializer,
    EventSignUpSerializer,
    CategorySeriaizer,
    TicketSerializer,
    TagsSerializer
)
class TagsViewSet(ModelViewSet):
    serializer_class = TagsSerializer
    queryset = Ticket.objects.all()
# Create your views here.
class EventViewSet(ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.prefetch_related('tickets').all()
    permission_classes =[ReadOnlyorAdmin]
    
    def get_serializer_context(self):
        return {"request": self.request} 

class TicketViewSet(ModelViewSet):
    serializer_class = TicketSerializer
    queryset = Ticket.objects.all()
    
class EventSignupViewSet(ModelViewSet):
    serializer_class = EventSignUpSerializer
    permission_classes = [IsAuthenticated]
    queryset = EventSignup.objects.all()
    def get_queryset(self):
        ticket_id = self.kwargs['ticket_pk']
        
        # user_id = self.request.user.id
        # user_id = self.kwargs['user_pk']
        return EventSignup.objects.filter(ticket_id=ticket_id).all()

    def perform_create(self, serializer):
        ticket_id = self.kwargs['ticket_pk']
        user_id = self.request.user.id
        try:
            ticket = Ticket.objects.get(id=ticket_id)
        except Ticket.DoesNotExist:
            raise ValidationError({"error": "این بلیط وجود ندارد."})
        
        serializer.save(ticket=ticket,user_id=user_id)
    
        
class CategoryViewSet(ModelViewSet):
    serializer_class = CategorySeriaizer
    queryset = Category.objects.all()
    
  
    def get_serializer_context(self):
        return {"request": self.request} 
    