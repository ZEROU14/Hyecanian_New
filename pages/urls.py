from django.urls import path,include
from rest_framework import routers
from .views import EventViewSet

from .views import *

router = routers.DefaultRouter()
router.register('events', EventViewSet)

# event_router = routers.NestedDefaultRouter(router,'events',lookup ='event')
# event_router.register('detail',)

urlpatterns = [
    path('',include(router.urls))
]
