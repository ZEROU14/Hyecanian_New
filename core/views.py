from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .permissions import PostOnlyorAdmin
from . import serializers
# Create your views here.
class CustomUserViewSet(ModelViewSet):
    serializer_class = serializers.DjoserSerializer
    # permission_classes =[PostOnlyorAdmin]
    
    def get_object(self):
        return self.request.user