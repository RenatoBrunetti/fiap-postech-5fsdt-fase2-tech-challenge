# FIAP Postech 5FSDT Fase2 Tech Challenge

## Requisitos para executar o projeto
- Instalar o Docker
- Instalar o Docker Compose
- Instalar o Node.js

## Passo-a-passo para iniciar o projeto

1. Executar o comando `docker compose up -d` para criar o banco de dados e as tabelas com o **Docker Compose**. O banco será persistido e as informações salvas na pasta `data` na raiz do projeto.

2. Executar o comando `npm i` ou `npm install` para instalar as dependências do projeto na pasta `node_modules` na raiz do projeto.

## Banco de Dados
![Diagrama do banco de dados!](/assets/images/db-diagram.png "Diagrama do banco de dados") *"Diagrama do banco de dados"*

### Tabelas:
- `role`: Responsável por armazenar os tipos possíveis para usuários.
- `user`: Responsável por armazenar os usuários cadastrados.
- `post`: Responsável por armazenar as postagens cadastradas.
- `post_log`: Responsável por armazenar os logs de manipulação das postagens.

