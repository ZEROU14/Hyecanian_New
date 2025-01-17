from django.db import models

# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=500,blank=True)

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
    title = models.CharField(max_length=255)
    description = models.TextField()
    evtry_price = models.PositiveIntegerField()
    datetime_created = models.DateTimeField(auto_now_add=True)
    event_data = models.DateField(auto_now=True)
    title_picture = models.ImageField(upload_to='event')
    seconde_picture = models.ImageField(upload_to='event')
    category = models.ForeignKey(Category,on_delete=models.PROTECT,related_name='category')
    location = models.CharField(max_length=255)
    status = models.CharField(choices=COMPETITIO_OPTIONS,max_length=25,default=UPCOMMING_COMPETITION)
    gender = models.CharField(choices=GENDER_OPTIONS,max_length=3)
    
    def __str__(self):
        return (f"{self.title}")
from django.conf import settings
class Ticket(models.Model):
    title = models.CharField(max_length=225)
    event = models.ForeignKey(Event,on_delete=models.PROTECT,related_name='tickets')
    price = models.IntegerField()

    def __str__(self):
        return (f"ticket for event {self.event} with the title {self.title}")


class EventSignup(models.Model):
    GENDER_MALE = 'm'
    GENDER_FEMALE = 'f'
    GENDER_OPTIONS =[
        (GENDER_MALE,'male'),
        (GENDER_FEMALE,'female'),
    ]
    ticket = models.ForeignKey(Ticket,on_delete=models.PROTECT)
    # event = models.ForeignKey(Event,on_delete=models.PROTECT)
    user = models.ForeignKey(settings.AUTH_USER_MODEL , on_delete=models.PROTECT,related_name='event_signups')
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    age = models.DateField()
    phone_number = models.IntegerField()
    gender = models.CharField(max_length=1,choices=GENDER_OPTIONS)
    incurace_pic = models.ImageField(upload_to='event_signup_incurance')
    id_pic = models.ImageField(upload_to='event_signup_id_pic')
    state = models.CharField(max_length=255,)
    
    def __str__(self):
        return (f"Sign up for event :  {self.event} \n for user {self.user} " )