from django.urls import path,include
from . import views
urlpatterns = [
    path('me/',views.CustomUserViewSet.as_view({'get':'retrieve'})),
]
