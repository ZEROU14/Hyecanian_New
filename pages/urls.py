from django.urls import path,include
from rest_framework import routers
from .views import EventViewSet
from rest_framework_nested import routers
from rest_framework_nested.routers import NestedDefaultRouter
from .views import *

# router = routers.DefaultRouter()
# # router.register('tickets', TicketViewSet, basename='tickets')
# router.register('events', EventViewSet,basename='event')
# router.register('ticket',TicketViewSet,basename='ticket')
# router.register('categories',CategoryViewSet,basename='category')


# # روت تو در تو برای ثبت‌نام‌ها
# tickets_router = NestedDefaultRouter(router, 'tickets', lookup='ticket')
# tickets_router.register('signups', EventSignupViewSet, basename='ticket-signups')

# urlpatterns = router.urls + tickets_router.urls

router = routers.DefaultRouter()
router.register('tickets', TicketViewSet, basename='tickets')
router.register('events', EventViewSet,basename='event')
router.register('categories',CategoryViewSet,basename='category')



# روت تو در تو برای ثبت‌نام‌ها
tickets_router = NestedDefaultRouter(router, 'tickets', lookup='ticket')
tickets_router.register('signups', EventSignupViewSet, basename='ticket-signups')

urlpatterns = router.urls + tickets_router.urls