from django.urls import path
from .views import GenerateOTPView, VerifyOTPView, CustomUserViewSet

urlpatterns = [
    path('generate-otp/', GenerateOTPView.as_view(), name='generate-otp'),
    path('verify-otp/', VerifyOTPView.as_view(), name='verify-otp'),
    path('user/', CustomUserViewSet.as_view(), name='user-profile'),
]