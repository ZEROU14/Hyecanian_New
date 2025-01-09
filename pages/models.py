from django.db import models

# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=500,blank=True)

class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    evtry_price = models.PositiveIntegerField()
    datetime_created = models.DateTimeField(auto_now_add=True)
    title_picture = models.ImageField(upload_to='event')
    seconde_picture = models.ImageField(upload_to='event')
    category = models.ForeignKey(Category,on_delete=models.PROTECT,related_name='category')
    location = models.CharField(max_length=255)
    


class EventSignup(models.Model):
    GENDER_MALE = 'm'
    GENDER_FEMALE = 'f'
    GENDER_OPTIONS =[
        (GENDER_MALE,'male'),
        (GENDER_FEMALE,'female'),
    ]
    event = models.ForeignKey(Event,on_delete=models.PROTECT)
    name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    age = models.DateField()
    phone_number = models.IntegerField()
    gender = models.CharField(max_length=1,choices=GENDER_OPTIONS)
    incurace_pic = models.ImageField(upload_to='event_signup_incurance')
    id_pic = models.ImageField(upload_to='event_signup_id_pic')
    state = models.CharField(max_length=255,)