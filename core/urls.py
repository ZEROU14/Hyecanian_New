from django.urls import path,include
from . import views
urlpatterns = [
    path('auth/user/me',views.CustomUserViewSet.as_view({'get':'retrieve'})),
]
