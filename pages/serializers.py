from django.urls import reverse
from rest_framework import serializers
from .models import *
import jdatetime

class JalaliDateField(serializers.DateField):
    """
    A custom serializer field that:
      - Converts a Gregorian date (stored in the model)
        to a Jalali-formatted string for API output.
      - Converts a provided Jalali date string to a Gregorian date
        for model storage.
    """

    def to_representation(self, value):
        # Convert the Gregorian date to a Jalali date string.
        if value:
            jalali_date = jdatetime.date.fromgregorian(date=value)
            # Customize the format as needed, e.g., 'YYYY-MM-DD'
            return jalali_date.strftime('%Y-%m-%d')
        return None

    def to_internal_value(self, data):
        # Expecting a string formatted in Jalali date, e.g., '1402-05-12'.
        try:
            parts = data.split("-")
            if len(parts) != 3:
                raise ValueError("Please use the format YYYY-MM-DD for the Jalali date.")
            jy, jm, jd = map(int, parts)
            # Convert the Jalali input to Gregorian.
            gregorian_date = jdatetime.date(jy, jm, jd).togregorian()
            return gregorian_date
        except Exception as exc:
            raise serializers.ValidationError("Invalid Jalali date format. Expected YYYY-MM-DD.") from exc


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
    event_name = serializers.StringRelatedField(source = 'event.title')
    
    class Meta:
        model = Ticket
        fields = ['id','title','price','event_name','signup_link']
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

from rest_framework import serializers


class EventSerializer(serializers.ModelSerializer):
    link = serializers.HyperlinkedIdentityField(
            view_name = 'event-detail',
            lookup_field = 'pk'
    )
    event_date = JalaliDateField()
        
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
                  ,'link_to_social_media'
                  ,'start_address'
                  ,'finish_address'
                  ]
    

class EventSignUpSerializer(serializers.ModelSerializer):
    age = JalaliDateField()
    class Meta:
        model = EventSignup
        fields = [
                  "id",
                  'first_name',
                  'last_name',
                  'age',
                  'phone_number',
                  'gender',
                  'id_number',
                  'state',
                  'T_Shirt_size',
                  'relativ_name'
                  ,'relativ_last_name'
                  ,'relativ_phone_number'
                  ,'singup_date'
                  ,'is_paid'
                  ]

        read_only_fields = ['user','ticket','is_paid']

                        
