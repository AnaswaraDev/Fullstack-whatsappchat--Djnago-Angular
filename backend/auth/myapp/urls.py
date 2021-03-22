from rest_framework import views
from .views import RegisterAPI, LoginAPI, ChangePasswordView,viewmessage,savemessage,geteachuser,search
from django.urls import path, include
from knox import views as knox_views
from . import views as customviews
from  django.db.models import Q

urlpatterns = [
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('api/change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('api/password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('api/userdetails/', customviews.userdetails, name='userdetails'),
    path('api/search/<str:text>', customviews.search, name='search'),
    path('api/allusers/' ,customviews.allusers, name='allusers' ),
    path('api/geteachuser/<int:id>',customviews.geteachuser,name="geteachuser"),
    path('api/viewmessage/<int:stid>/<int:rcid>',viewmessage,name="viewmessage"),
    path('api/savemessage/',savemessage,name="savemessage"),
]