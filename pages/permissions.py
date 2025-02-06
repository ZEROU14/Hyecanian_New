from rest_framework import permissions

class ReadOnlyorAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.method == 'GET' or(request.user and request.user.is_staff))

class PostForUser(permissions.BasePermission):
    def has_permission(self, request, view):
        
        # Allow GET and POST requests for authenticated users
        if request.method in ['GET', 'POST'] and request.user.is_authenticated:
            return True
        # Allow all methods for admin users
        if request.user and request.user.is_staff:
            return True
      
        return False
