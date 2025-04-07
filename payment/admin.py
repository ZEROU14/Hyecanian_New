from django.contrib import admin
from .models import Payment

class PaymentAdmin(admin.ModelAdmin):
    # list_display = ['ticket', 'phone_number', 'amount', 'is_paid', 'event_signup', 'user', 'get_user_id']

    def get_user_id(self, obj):
        return obj.user.id if obj.user else None
    get_user_id.short_description = 'User ID'

admin.site.register(Payment, PaymentAdmin)