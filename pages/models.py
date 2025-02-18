from django.db import models
from django.conf import settings

# Create your models here.
    
class Tags(models.Model):
    title = models.CharField(max_length=255,unique=True)
    
    def __str__(self):
        return self.title

class Category(models.Model):

    title = models.CharField(max_length=255)
    description = models.CharField(max_length=500,blank=True)

    def __str__(self):
        return self.title


class Event(models.Model):
    GENDER_MALE = 'm'
    GENDER_FEMALE = 'f'
    GENDER_ALL = 'all'
    GENDER_OPTIONS =[
        (GENDER_MALE,'male'),
        (GENDER_FEMALE,'female'),
        (GENDER_ALL,'all genders'),
    ]
    UPCOMMING_COMPETITION = 'up_comming_competition'
    INPROGRESS_COMPETITION = 'in_progress_competition'
    CLOSED_COMPETITION = 'closed_competition'
    COMPETITIO_OPTIONS = [
        (UPCOMMING_COMPETITION, 'up_comming_competition'),
        (INPROGRESS_COMPETITION, 'in_progress_competition'),
        (CLOSED_COMPETITION, 'closed_competition')
    ]
    user = models.ForeignKey(settings.AUTH_USER_MODEL , on_delete=models.PROTECT,related_name='event')
    title = models.CharField(max_length=255)
    description = models.TextField()
    datetime_created = models.DateTimeField(auto_now_add=True)
    event_data = models.DateField(auto_now=True)
    banner_image = models.ImageField(upload_to='event')
    route_image = models.ImageField(upload_to='event')
    category = models.ForeignKey(Category,on_delete=models.PROTECT,related_name='category')
    location = models.CharField(max_length=255)
    status = models.CharField(choices=COMPETITIO_OPTIONS,max_length=25,default=UPCOMMING_COMPETITION)
    gender = models.CharField(choices=GENDER_OPTIONS,max_length=3)
    start_address = models.CharField(max_length=500)
    finish_address = models.CharField(max_length=500)
    road_profile_tag = models.ManyToManyField(Tags,related_name='road')
    road_surface = models.ManyToManyField(Tags,related_name='surface')
    other_tags = models.ManyToManyField(Tags,related_name='event')
   
    def __str__(self):
        return (f"{self.title}")
    

class TeamMember(models.Model):
    event = models.Man
class Ticket(models.Model):
    title = models.CharField(max_length=225)
    event = models.ForeignKey(Event,on_delete=models.PROTECT,related_name='tickets')
    price = models.IntegerField()

    def __str__(self):
        return (f"ticket for event {self.event} ")


class EventSignup(models.Model):
    GENDER_MALE = 'm'
    GENDER_FEMALE = 'f'
    GENDER_OPTIONS =[
        (GENDER_MALE,'male'),
        (GENDER_FEMALE,'female'),
    ]
    ticket = models.ForeignKey(Ticket,on_delete=models.PROTECT,related_name='event_ticket')
    user = models.ForeignKey(settings.AUTH_USER_MODEL , on_delete=models.PROTECT,related_name='event_signups')
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    age = models.DateField()
    singup_date = models.DateTimeField(auto_now_add=True)
    phone_number = models.CharField(max_length=11)
    gender = models.CharField(max_length=1,choices=GENDER_OPTIONS)
    incurace_pic = models.ImageField(upload_to='event_signup_incurance')
    id_pic = models.ImageField(upload_to='event_signup_id_pic')
    state = models.CharField(max_length=255,)
    relativ_name = models.CharField(max_length=255)
    relativ_last_name = models.CharField(max_length=255)
    relativ_phone_number = models.CharField(max_length=11)

    class Meta:
        unique_together = ('ticket', 'phone_number')
     
  
    def __str__(self):
        return (f"Sign up for Ticket:  {self.ticket}  for user {self.user} " )
