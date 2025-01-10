from django.urls import path,include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register('blogs',BlogViewSet,basename='blogs')
router.register('categories', CategoryViewSet,basename='category')

urlpatterns = [
    path('', include(router.urls))
]