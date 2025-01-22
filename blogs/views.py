from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import Blogs,Category
# Create your views here.


class BlogViewSet(ModelViewSet):
    serializer_class = BlogSeriaizer
    queryset = Blogs.objects.all()
    
    def get_serializer_context(self):
        return {"request": self.request} 
    
    
class CategoryViewSet(ModelViewSet):
    serializer_class = CategorySeriaizer
    queryset = Category.objects.all()
    
    def get_serializer_context(self):
        return  {'erquest' : self.request}