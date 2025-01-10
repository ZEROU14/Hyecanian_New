from rest_framework import serializers

from .models import *

class BlogSeriaizer(serializers.ModelSerializer):
    class Meta:
        model = Blogs
        fields = '__all__'