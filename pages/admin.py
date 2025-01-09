from django.contrib import admin

# Register your models here.
from .models import * 

models_list = [Category, Event, EventSignup]


admin.site.register(models_list)