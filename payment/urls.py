# payment/urls.py

from django.urls import path
from .views import PaymentRequestView, PaymentVerifyView

app_name = 'payment'

urlpatterns = [
    path('request/<int:ticket_id>/', PaymentRequestView.as_view(), name='request'),
    path('verify/', PaymentVerifyView.as_view(), name='verify'),
]
