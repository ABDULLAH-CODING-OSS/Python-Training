from django.urls import path
from .views import Index, SignUpView
from django.contrib import admin
from django.contrib.auth import views as auth_views

urlpatterns= [
    path('', Index.as_view(), name='index'),
    path('Signup/', SignUpView.as_view(), name='signup'),
    path('Login/', auth_views.LoginView.as_view(template_name='inventory/login.html'), name= 'login')

]