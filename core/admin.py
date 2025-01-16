from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from core.models import CustomUser
# Register your models here.
@admin.register(CustomUser)
class CustomeUserAdmin(UserAdmin):
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ('first_name','last_name', "usable_password", "password1", "password2"),
            },
        ),
    )