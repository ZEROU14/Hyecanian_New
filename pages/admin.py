from django.contrib import admin

# Register your models here.
from .models import * 

models_list = [Category, Event,Tags,TeamMember,Sponsor,Ticket]


admin.site.register(models_list)
from django.contrib import admin
from .models import EventSignup, Ticket
from payment.models import Payment

class PaymentInline(admin.TabularInline):
    model = Payment
    extra = 0

class PaymentInline(admin.TabularInline):
    model = Payment
    extra = 0

class EventSignupAdmin(admin.ModelAdmin):
    inlines = [PaymentInline]

    def is_paid(self, obj):
        return obj.payments.filter(is_paid=True).exists()
    is_paid.boolean = True
    is_paid.short_description = 'Paid'

admin.site.register(EventSignup, EventSignupAdmin)
