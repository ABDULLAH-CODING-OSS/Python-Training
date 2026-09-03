from django.urls import path
from .views import Index, SignUpView
from django.contrib import admin

urlpatterns= [
    path('', Index.as_view(), name='index'),
    path('Signup/', SignUpView.as_view(), name='signup'),

]