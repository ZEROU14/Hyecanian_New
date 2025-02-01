from django.forms import ValidationError
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .premissions import ReadOnlyorAdmin
from kavenegar import *
api = KavenegarAPI('346A49326C3579705879686B6854425272424B49744753734B417647326C704A6E5A563565794D333150343D')
params = { 'sender' : '2000660110' ,'receptor': 'phone_number','message' :'message' }

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
        return EventSignup.objects.filter(ticket_id=ticket_id).all()

  
    
    
    def perform_create(self, serializer):
        ticket_id = self.kwargs['ticket_pk']
        user_id = self.request.user.id
        try:
            ticket = Ticket.objects.get(id=ticket_id)
        except Ticket.DoesNotExist:
            raise ValidationError({"error": "این بلیط وجود ندارد."})

        # Validate user's information
        phone_number = serializer.validated_data.get('phone_number')
        if self.validate_user_info(phone_number):
            # Send SMS
            # event_name = serializer.validated_data['event_name']
            self.send_sms(phone_number, f'Thank you for signing up for !')
            # Save the information
            serializer.save(ticket=ticket, user_id=user_id)
        else:
            raise ValidationError({"error": "Invalid user information."})

    def validate_user_info(self, phone_number):
        # Add your validation logic here
        if len(phone_number) == 11:
            return True
        return False

    def send_sms(self, phone_number, message):

        api = KavenegarAPI('636D7364614A3274347766344C7973514B445937554C5371306D3864514D4D574B417A62572B526A547A773D')
        try:
            params = {
                'sender': '2000660110',
                'receptor': phone_number,
                'message': message,
            }
            response = api.sms_send(params)
        except APIException as e:
            print(e)
        except HTTPException as e:
            print(e)
class CategoryViewSet(ModelViewSet):
    serializer_class = CategorySeriaizer
    queryset = Category.objects.all()
    
  
    def get_serializer_context(self):
        return {"request": self.request} 
    