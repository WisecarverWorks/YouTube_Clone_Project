from django.contrib import admin
from django.urls import path, include 

urlpatterns = [
    path('admin/', admin.site.urls),
    # we need paths for authentication and comments
    path('api/auth/', include("authentication.urls")),
    path('api/comments/', include("comments.urls")),
]
