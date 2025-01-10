from rest_framework import serializers

from .models import *

class BlogSeriaizer(serializers.ModelSerializer):
    class Meta:
        model = Blogs
        fields = '__all__'
        
        
class CategorySeriaizer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'