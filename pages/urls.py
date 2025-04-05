from django.urls import path,include
from rest_framework import routers
from .views import EventViewSet
from rest_framework_nested import routers
from rest_framework_nested.routers import NestedDefaultRouter
from .views import *



router = routers.DefaultRouter()
router.register('tickets', TicketViewSet, basename='tickets')
router.register('events', EventViewSet,basename='event')
router.register('categories',CategoryViewSet,basename='category')
router.register('tags',TagsViewSet,basename='tags')
# router.register('teamMember',TeamMemberViewSet,basename='team')


ticket_create = NestedDefaultRouter(router,'events' , lookup = 'event')
ticket_create.register('ticket_create', TicketViewSet, basename='event_ticket')

sponser_create = NestedDefaultRouter(router,'events' , lookup = 'event')
sponser_create.register('sponser_create', SponserViewSet, basename='event_ticket')

team_create = NestedDefaultRouter(router,'events' , lookup = 'event')
team_create.register('team_create', TeamMemberViewSet, basename='event_team')


tickets_router = NestedDefaultRouter(router, 'tickets', lookup='ticket',)
tickets_router.register('signups', EventSignupViewSet, basename='ticket-signups')


urlpatterns = [
    path('', include(router.urls)),
    path('', include(team_create.urls)),
    path('', include(ticket_create.urls)),
    path('', include(tickets_router.urls)),
    path('', include(sponser_create.urls))
]