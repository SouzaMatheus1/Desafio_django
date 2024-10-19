from django.shortcuts import render
import csv
import os
from django.conf import settings

# Create your views here.

def index(request):
    return render(request, 'django_app/index.html')

def imagem(request):
    return render(request, 'django_app/imagem.html')

def tabela(request):
    return render(request, 'django_app/tabela.html')

# funcoes de acao
def index(request):
    data = []
    csv_path = os.path.join(settings.STORAGE_ROOT, 'alunos,csv')

    with open(csv_path, newline='', encoding='urtf-8') as csvfile:
        reader = csv.reader(csvfile)

        for row in reader:
            data.append(row)

    return render(request, 'django_app/tabela.html', {'data':data})