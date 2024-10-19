from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'django_app/index.html')

def imagem(request):
    return render(request, 'django_app/imagem.html')

def tabela(request):
    return render(request, 'django_app/tabela.html')