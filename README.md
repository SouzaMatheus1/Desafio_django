# Projeto de Busca e Exibição de Imagens

Este é um projeto web simples desenvolvido com Django para realizar a **busca e exibição de imagens** a partir de URLs fornecidas pelo usuário. O projeto consiste em uma interface que aceita a URL de uma imagem, exibe a imagem correspondente e apresenta uma descrição funcional do site.

## Funcionalidades

- Campo de texto para o usuário inserir uma URL de imagem.
- Botão para buscar e exibir a imagem.
- Quadro dedicado para mostrar a imagem retornada.
- Seção com um descritivo da funcionalidade do site.

## Como Usar

Clone este repositório: 
```bash
git clone https://github.com/SouzaMatheus1/Desafio_django.git
```

Navegue até o diretório do projeto: 
```bash
cd Desafio_django
```

Crie um ambiente virtual (opcional, mas recomendado): 
```bash
python -m venv venv
```

Ative o ambiente virtual:
- No Windows: 
```bash
venv\Scripts\activate
```
- No macOS e Linux: 
```bash
source venv/bin/activate
```

Instale as dependências: 
Certifique-se de que o `requirements.txt` esteja presente no diretório do projeto e contenha as bibliotecas necessárias. 

Em seguida, execute: 
```bash
pip install -r requirements.txt
```

Execute as migrações do banco de dados (se houver): 
```bash
python manage.py migrate
```

Execute o servidor Django: 
```bash
python manage.py runserver
```

Acesse o projeto no navegador: 
```
http://localhost:8000
```

No **Image Search**, insira a URL de uma imagem e clique no botão para visualizá-la.
