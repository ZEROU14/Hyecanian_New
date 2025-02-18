from django.contrib import admin

# Register your models here.
from .models import * 

models_list = [Category, Event, EventSignup,Ticket,Tags]


admin.site.register(models_list)