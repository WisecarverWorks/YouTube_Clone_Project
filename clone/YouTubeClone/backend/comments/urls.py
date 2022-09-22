from django.urls import path
from comments import views


urlpatterns = [
    path('', views.create_comment),
    path('<str:video_id>', views.get_comments),
]
