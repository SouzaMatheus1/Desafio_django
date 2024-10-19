from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('imagem/', views.imagem, name='imagem'),
    path('tabela/', views.tabela, name='tabela'),
]