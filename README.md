# FIAP Postech 5FSDT Fase2 Tech Challenge

Alunos:

- Eduarda Campos Aragão / RM365002
- Esdras Correa / RM361922
- Rafael Lucianetti Oliveira / RM361704
- Renato Brunetti / RM362132

## Requisitos para executar o projeto

- Instalar o Docker
- Instalar o Docker Compose
- Instalar o Node.js

## Passo-a-passo para iniciar o projeto

1. Adicionar um arquivo `.env` na raiz do projeto com todas as variáveis de ambiente cadastradas também no arquivo `.env.example`.

2. Executar o comando `docker compose up -d` para criar o banco de dados e as tabelas com o **Docker Compose**. O banco será persistido e as informações salvas na pasta `data` na raiz do projeto.

3. Executar o comando `npm i` ou `npm install` para instalar as dependências do projeto na pasta `node_modules` na raiz do projeto.

4. Executar o comando `npm run start:dev` para executar a aplicação.

## Arquitetura

![Diagrama básico de arquitetura!](/assets/images/arch-app-diagram.png 'Diagrama básico de arquitetura') _"Diagrama básico de arquitetura"_

## Banco de Dados

![Diagrama do banco de dados!](/assets/images/db-diagram.png 'Diagrama do banco de dados') _"Diagrama do banco de dados"_

### Tabelas:

- `role`: Responsável por armazenar os tipos possíveis para usuários.
- `user`: Responsável por armazenar os usuários cadastrados.
- `post`: Responsável por armazenar as postagens cadastradas.
- `post_log`: Responsável por armazenar os logs de manipulação das postagens.

## Docker

![Docker Desktop executanto Banco de Dados!](/assets/images/docker-desktop.png 'Docker Desktop executanto Banco de Dados') _"Docker Desktop executanto Banco de Dados"_

## Rotas HTTP

### Role

- `GET` Find All Roles `/role`

### Post

- `GET` Find All Posts `/post`
- `POST` Create Post `/post`

### Post Log

- `GET` Find All PostLogs `/post-log`

### User

- `GET` Find All Users `/user`
- `POST` Create User `/user`