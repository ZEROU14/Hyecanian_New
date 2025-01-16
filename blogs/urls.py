from django.urls import path,include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register('',BlogViewSet,basename='blogs')
router.register('blog-category', CategoryViewSet,basename='blog-category')

urlpatterns = [
    path('', include(router.urls))
]