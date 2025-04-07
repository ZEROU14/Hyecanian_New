import datetime
from urllib import request
from django.forms import ValidationError
from rest_framework.permissions import IsAdminUser,DjangoModelPermissions
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
import os
from dotenv import load_dotenv
load_dotenv()
# from core import permissions
from .permissions import ReadOnlyorAdmin,PostForUser,CustomDjangoModelPermission


from .models import (
    Event,
    EventSignup,
    Category,
    Ticket,
    TeamMember,
    Sponsor
)
from .serializers import (
    EventSerializer,
    EventSignUpSerializer,
    CategorySeriaizer,
    TicketSerializer,
    TagsSerializer,
    TeamMemberSerialzer,
    SponserSerialzer
)

class TeamMemberViewSet(ModelViewSet):
    serializer_class = TeamMemberSerialzer
    queryset = TeamMember.objects.select_related('event').all()
    permission_classes = [IsAdminUser]
   
    def get_queryset(self):
        event_id = self.kwargs.get('event_pk')
        if not event_id:
            raise ValidationError({"error": "event_id not found in the request."})
        
        return TeamMember.objects.filter(event_id=event_id)

    def perform_create(self, serializer):
        event_id = self.kwargs.get('event_pk')
        if not event_id:
            raise ValidationError({"error": "event_id not found in the request."})
        
        try:
            event = Event.objects.get(id=event_id)
        except Event.DoesNotExist:
            raise ValidationError({"error": "Event not found."})

        serializer.save(event=event)
class TagsViewSet(ModelViewSet):
    serializer_class = TagsSerializer
    queryset = Ticket.objects.all()
    permission_classes = [IsAdminUser]

class SponserViewSet(ModelViewSet):
    serializer_class = SponserSerialzer
    queryset = Sponsor.objects.select_related('event').all()
    permission_classes=[IsAdminUser]

   
    def get_queryset(self):
        event_id = self.kwargs.get('event_pk')
        if not event_id:
            raise ValidationError({"error": "event_id not found in the request."})
        
        return TeamMember.objects.filter(event_id=event_id)

    def perform_create(self, serializer):
        event_id = self.kwargs.get('event_pk')
        if not event_id:
            raise ValidationError({"error": "event_id not found in the request."})
        
        try:
            event = Event.objects.get(id=event_id)
        except Event.DoesNotExist:
            raise ValidationError({"error": "Event not found."})

        serializer.save(event=event)
class EventViewSet(ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.select_related('category').prefetch_related('tickets', 'team', 'road_profile_tag', 'road_surface', 'other_tags').all()
    permission_classes =[ReadOnlyorAdmin]
    
    def get_serializer_context(self):
        return {"request": self.request} 

class TicketViewSet(ModelViewSet):
    serializer_class = TicketSerializer
    queryset = Ticket.objects.all()
    # permission_classes = [IsAdminUser]
   
    def get_queryset(self):
        event_id = self.kwargs.get('event_pk')
        if event_id:
            return Ticket.objects.filter(event_id=event_id)
        return super().get_queryset()

    def perform_create(self, serializer):
        event_id = self.kwargs.get('event_pk')
        if not event_id:
            raise ValidationError({"error": "event_id not found in the request."})
        
        try:
            event = Event.objects.get(id=event_id)
        except Event.DoesNotExist:
            raise ValidationError({"error": "Event not found."})

        serializer.save(event=event)
class EventSignupViewSet(ModelViewSet):
    serializer_class = EventSignUpSerializer
    queryset = EventSignup.objects.select_related('ticket','user').all()
    permission_classes = [PostForUser]

    def list(self, request, *args, **kwargs):
        if not request.user.is_staff:
            return Response({"detail": "Not allowed."},)
        return super().list(request, *args, **kwargs)

    def get_queryset(self):
        ticket_id = self.kwargs['ticket_pk']
        return EventSignup.objects.filter(ticket_id=ticket_id).all()
  
    def perform_create(self, serializer):
        ticket_id = self.kwargs['ticket_pk']
        user_id = self.request.user.id
        already_signedup = EventSignup.objects.filter(ticket_id=ticket_id,user_id=user_id).first()
        if already_signedup:
            raise ValidationError({"detail": "You have already signed up for this ticket."})
        try:
            ticket = Ticket.objects.get(id=ticket_id)
        except Ticket.DoesNotExist:
            raise ValidationError({"error": "این بلیط وجود ندارد."})

        # Validate user's information
        phone_number = serializer.validated_data.get('phone_number')
        if self.validate_user_info(phone_number):
            # Send SMS
            # event_name = serializer.validated_data['event_name']
            # self.send_sms(phone_number, f'Thank you for signing up for ticket : {ticket} !')
            # Save the information
            serializer.save(ticket=ticket, user_id=user_id)
        else:
            raise ValidationError({"error": "Invalid user information."})

    def validate_user_info(self, phone_number):
        # Add your validation logic here
        if len(phone_number) == 11:
            return True
        return False

 
class CategoryViewSet(ModelViewSet):
    serializer_class = CategorySeriaizer
    queryset = Category.objects.all()
    permission_classes = [IsAdminUser]

    def get_serializer_context(self):
        return {"request": self.request} 
    