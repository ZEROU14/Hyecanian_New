from rest_framework import permissions

class ReadOnlyorAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.method == 'GET' or(request.user and request.user.is_staff))

class PostForUser(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in ['GET', 'POST'] and request.user.is_authenticated:
            return True
        if request.user and request.user.is_staff:
            return True
      
        return False


class CustomDjangoModelPermission(permissions.DjangoModelPermissions):
    def __init__(self):
        self.perms_map['GET'] = ['%(app_label)s.view_%(model_name)s']