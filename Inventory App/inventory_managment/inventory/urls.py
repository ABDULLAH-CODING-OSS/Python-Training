from django.urls import path
from .views import Index
from django.contrib import admin

urlpatterns= [
    path('', Index.as_view(), name='index'),
    
]