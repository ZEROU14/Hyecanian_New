from django.urls import reverse
from rest_framework import serializers
from .models import *

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = '__all__'
        

class TicketSerializer(serializers.ModelSerializer):
    signup_link = serializers.SerializerMethodField()
    event_name = serializers.StringRelatedField(source = 'event')
    
    class Meta:
        model = Ticket
        fields = ['id','title','price','event','event_name','signup_link']
        
    def get_signup_link(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(reverse('ticket-signups-list', args=[obj.pk]))
        return reverse('ticket-signups-list', args=[obj.pk])
        
   
class EventSerializer(serializers.ModelSerializer):
    link = serializers.HyperlinkedIdentityField(
            view_name = 'event-detail',
            lookup_field = 'pk'
    )
        
    tickets = TicketSerializer(many=True,read_only=True)
    other_tags = TagsSerializer(many= True)
    road_profile_tag = TagsSerializer(many=True)
    road_surface = TagsSerializer(many=True)

    class Meta:
        model = Event
        fields = ['link',
                  'title',
                  'description',
                  'datetime_created'
                  ,'title_picture'
                  ,'seconde_picture'
                  ,'category'
                  ,'location'
                  ,'gender'
                  ,'other_tags'
                  ,'road_profile_tag'
                  ,'road_surface'
                  ,'tickets'
                  ]
    

class EventSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventSignup
        fields = ['user',
                  'first_name',
                  'last_name','age',
                  'phone_number',
                  'gender',
                  'incurace_pic',
                  'id_pic',
                  'state',
                  'ticket'
                  ,'relativ_name'
                  ,'relativ_last_name'
                  ,'relativ_phone_number'
                  ,'singup_date']

        read_only_fields = ['user','ticket']

                        
class CategorySeriaizer(serializers.ModelSerializer):
    link = serializers.HyperlinkedIdentityField(
        view_name = 'category-detail',
        lookup_field = 'pk',
    )
    class Meta:
        model = Category
        fields = ['link','title','description']