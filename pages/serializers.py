from django.urls import reverse
from rest_framework import serializers
from .models import *


class CategorySeriaizer(serializers.ModelSerializer):
    link = serializers.HyperlinkedIdentityField(
        view_name = 'category-detail',
        lookup_field = 'pk',
    )
    class Meta:
        model = Category
        fields = ['link','title','description']
class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ['title']
        

class TicketSerializer(serializers.ModelSerializer):
    signup_link = serializers.SerializerMethodField()
    event_name = serializers.StringRelatedField(source = 'event')
    
    class Meta:
        model = Ticket
        fields = ['title','price','event_name','signup_link']
        read_only_fields = ['id','event',]
        
    def get_signup_link(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(reverse('ticket-signups-list', args=[obj.pk]))
        return reverse('ticket-signups-list', args=[obj.pk])        
        

class TeamMemberSerialzer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = [
            "full_name"
            ,"position"
            ,"image"
        ]
        read_only_fields = ['id','event']

class SponserSerialzer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = [
            "social_link"
            ,"name"
            ,"description"
        ]
        read_only_fields = ['id','event']
        
    
class EventSerializer(serializers.ModelSerializer):
    link = serializers.HyperlinkedIdentityField(
            view_name = 'event-detail',
            lookup_field = 'pk'
    )
        
    other_tags =TagsSerializer(many= True)
    road_profile_tag =TagsSerializer(many=True)
    road_surface =TagsSerializer(many=True)
    tickets = TicketSerializer(many=True)
    team = TeamMemberSerialzer(many=True)
    category = CategorySeriaizer()
    class Meta:
        model = Event
        fields = ['link',
                  'title',
                  'description',
                  'datetime_created'
                  ,'event_date'
                  ,'banner_image'
                  ,'route_image'
                  ,'category'
                  ,'location'
                  ,'gender'
                  ,'other_tags'
                  ,'road_profile_tag'
                  ,'road_surface'
                  ,'tickets'
                  ,'team'
                  ]
    

class EventSignUpSerializer(serializers.ModelSerializer):
    # ticket = TicketSerializer()
  
  # id_pic = serializers.ImageField(required=True)
    class Meta:
        model = EventSignup
        fields = [
                  "id",
                  'first_name',
                  'last_name','age',
                  'phone_number',
                  'gender',
                  'id_number',
                  'state',
                  'T_Shirt_size',
                  'relativ_name'
                  ,'relativ_last_name'
                  ,'relativ_phone_number'
                  ,'singup_date'
                  ]

        read_only_fields = ['user','ticket','is_paid']

                        
