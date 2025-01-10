from django.urls import path,include
from rest_framework import routers
from .views import EventViewSet
from rest_framework_nested import routers

from .views import *

router = routers.DefaultRouter()
router.register('events', EventViewSet,basename='event')
router.register('categories',CategoryViewSet,basename='category')

event_router = routers.NestedDefaultRouter(router,'events', lookup = 'event')
event_router.register('signup',EventSignupViewSet,basename='events-signup')

urlpatterns = router.urls + event_router.urls