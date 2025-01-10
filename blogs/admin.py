from django.contrib import admin
from .models import * 
# Register your models here.
_models = [Blogs,Category]

admin.site.register(_models)