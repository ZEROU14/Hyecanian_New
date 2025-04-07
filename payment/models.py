from django.db import models
from django.conf import settings
# Create your models here.
from django.db import models
from pages.models import EventSignup
from django.shortcuts import get_object_or_404
from django.http import HttpResponse

# from events.models import EventSign


class Payment(models.Model):
    phone_number = models.CharField(max_length=15)
    ticket = models.ForeignKey('pages.Ticket', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    authority = models.CharField(max_length=255)
    ref_id = models.CharField(max_length=255, null=True, blank=True)
    is_paid = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    event_signup = models.ForeignKey(EventSignup, on_delete=models.CASCADE, related_name='payments', null=True, blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name='payments') 

    def __str__(self):
        return f"Payment {self.id} - {self.amount} - {self.phone_number}"
    
