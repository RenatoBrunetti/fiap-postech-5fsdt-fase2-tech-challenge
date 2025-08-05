# Blog API - Tech Challenge

> FIAP Postech 5FSDT Fase2

**Alunos:**

- Eduarda Campos Aragão / RM365002
- Esdras Correa / RM361922
- Rafael Lucianetti Oliveira / RM361704
- Renato Brunetti / RM362132

## Executar o projeto localmente

### Requisitos

1. Instalar o Docker
2. Instalar o Docker Compose
3. Instalar o Node.js
4. Adicionar um arquivo `.env` na raiz do projeto com todas as variáveis de ambiente cadastradas, e que podem ser encontradas no arquivo `.env.example`.
5. Executar o comando `npm i` ou `npm install` para instalar as dependências do projeto na pasta `node_modules` na raiz do projeto.

### Executar em modo desenvolvimento

1. Executar o comando `docker compose up -d database`, que através do **Docker Compose**, irá criar e executar o banco de dados com as tabelas inicialmente cadastradas. Dessa forma, O banco de dados e suas informações serão persistidas e salvas na pasta `data`, na raiz do projeto.

2. Executar o comando `npm run start:dev` para executar a aplicação.

### Executar em modo teste/produção

1. Executar o comando `docker compose up -d`, que através do **Docker Compose**, irá criar e executar o banco de dados com as tabelas inicialmente cadastradas e também executar a aplicação **Node.js** que ficará disponível através da porta cadastrada no arquivo `.env`. Dessa forma, o banco de dados e suas informações serão persistidas e salvas na pasta `data` na raiz do projeto.

## Informações Técnicas

### Arquitetura

![Diagrama básico de arquitetura!](/assets/images/arch-app-diagram.png 'Diagrama básico de arquitetura') _"Diagrama básico de arquitetura"_

A arquitetura utilizada no projeto foi baseada na **Arquitetura Limpa** ou **Clean Architecture**, onde:

- As requisições HTTP são recebidas através das **Rotas da API** que implementam os **Controladores** de acordo com os métodos HTTP e a o caminho da URL.
- Os **Controladores** implementam as **Fábricas** dos **Casos de Usos** de acordo com o que é recebido através das requisções das **Rotas da API**.
- Os **Casos de Usos** implementam individualmente cada um dos métodos dos **Repositórios**.
- Os **Repositórios** implementam os métodos que interagem com o banco de dados através das **Bibliotecas** de acordo com os modelos das **Entidades**.
- Os **Drivers** dos bancos de dados e ou o **ORM** são executados através dos repositórios para intermediar as consultas aos bancos de dados.
- As **Entidades** são as representações das tabelas do banco de dados com todos os detalhes.

### Tecnologias Utilizadas

<details>
  <summary>Node.js</summary>
  Um ambiente de execução JavaScript assíncrono e baseado em eventos. Ele permite a construção de aplicações de rede escaláveis e de alta performance, sendo a base para o desenvolvimento do back-end da API.
</details>
<details>
  <summary>TypeScript</summary>
  Uma superset do JavaScript que adiciona tipagem estática opcional. Ele melhora a manutenibilidade, a legibilidade e a confiabilidade do código, detectando erros de forma antecipada e facilitando o desenvolvimento em equipe.
</details>
<details>
  <summary>Fastify</summary>
  Um framework web focado em alta performance e baixa sobrecarga para Node.js. Ele é otimizado para lidar com um grande volume de requisições por segundo, oferecendo uma experiência de desenvolvimento simples e eficiente para a criação de rotas, plugins e middlewares da API.
</details>
<details>
  <summary>SQL</summary>
  A linguagem padrão para gerenciamento e manipulação de bancos de dados relacionais. É usada em conjunto com o PostgreSQL para criar, consultar, atualizar e excluir dados, garantindo a integridade e a estrutura das tabelas.
</details>
<details>
  <summary>PostgreSQL</summary>
  Um poderoso sistema de banco de dados relacional de código aberto, conhecido por sua robustez, confiabilidade e conformidade com padrões SQL. Ele é usado para armazenar e gerenciar os dados da aplicação de forma segura e consistente.
</details>
<details>
  <summary>TypeORM</summary>
  Um Object-Relational Mapper (ORM) para Node.js e TypeScript. Ele permite mapear as classes de entidade da aplicação para as tabelas do banco de dados, simplificando a interação com o PostgreSQL e mantendo a lógica de negócio desacoplada dos comandos SQL brutos.
</details>
<details>
  <summary>Jest</summary>
  Um framework de testes em JavaScript, com foco em simplicidade. Ele é usado para escrever e executar testes unitários e de integração, garantindo que o código da aplicação funcione conforme o esperado e que novas funcionalidades não quebrem as existentes (testes de regressão).
</details>
<details>
  <summary>GitHub Actions</summary>
  Uma ferramenta de integração e entrega contínua (CI/CD) do GitHub. Ela automatiza o fluxo de trabalho de desenvolvimento, como a execução de testes, a validação de código e o deploy da aplicação, garantindo um processo de entrega contínua e segura.
</details>
<details>
  <summary>Docker</summary>
  Uma plataforma de contêinerização que permite empacotar a aplicação e suas dependências em um ambiente isolado. Isso garante que a API funcione de maneira consistente em qualquer ambiente, do desenvolvimento à produção, eliminando problemas de compatibilidade.
</details>
<details>
  <summary>Docker Compose</summary>
  Uma ferramenta para definir e gerenciar aplicações multi-contêiner do Docker. Ela simplifica a orquestração do ambiente de desenvolvimento da API, permitindo que todos os serviços (como o Node.js e o PostgreSQL) sejam iniciados e conectados com um único comando.
</details>
<details>
  <summary>ESLint</summary>
  Uma ferramenta de análise estática de código para identificar e reportar problemas no código JavaScript/TypeScript. Ela ajuda a manter um padrão de codificação consistente, evitar erros comuns e melhorar a qualidade geral do código.
</details>
<details>
  <summary>Prettier</summary>
  Um formatador de código que garante que todo o código-fonte da aplicação seja formatado de forma consistente. Ele elimina discussões sobre estilos de código, promovendo um ambiente de desenvolvimento mais colaborativo e focado na lógica de negócio.
</details>
<details>
  <summary>Prometheus</summary>
  Um sistema de monitoramento e alerta de código aberto. Ele coleta métricas de séries temporais da sua API (como tempo de resposta, uso de CPU e erros) e as armazena em seu próprio banco de dados, permitindo que você entenda o comportamento e a performance da aplicação ao longo do tempo.
</details>
<details>
  <summary>Grafana</summary>
  Uma plataforma de análise e visualização de dados. Ela se integra perfeitamente com o Prometheus (e outras fontes de dados) para criar painéis (dashboards) e gráficos interativos. Com o Grafana, é possível visualizar as métricas coletadas pelo Prometheus de forma clara e intuitiva, facilitando a identificação de problemas, a tomada de decisões e a otimização da API.
</details>
<details>
  <summary>Swagger</summary>
  Uma ferramenta de código aberto que ajuda a projetar, documentar e consumir APIs REST. Ele gera uma interface interativa e visualmente atraente que descreve todos os endpoints da sua API, seus parâmetros de entrada, tipos de retorno e códigos de status. O Swagger simplifica o trabalho tanto para os desenvolvedores que consomem a API quanto para a equipe que a mantém, garantindo uma documentação sempre atualizada e fácil de explorar.
</details>

## Banco de Dados

![Diagrama do banco de dados!](/assets/images/db-diagram.png 'Diagrama do banco de dados') _"Diagrama do banco de dados"_

O banco de dados relacional utilizado na aplicação é o **PostgreSQL**.

### Tabelas:

- `role`: Responsável por armazenar os tipos possíveis para usuários.
- `user`: Responsável por armazenar os usuários cadastrados.
- `post`: Responsável por armazenar as postagens cadastradas.
- `post_log`: Responsável por armazenar os logs de manipulação das postagens.

## Docker

![Docker Desktop executanto o serviço de Banco de Dados!](/assets/images/docker-desktop-database.png 'Docker Desktop executanto o serviço de Banco de Dados') _"Docker Desktop executanto o serviço de Banco de Dados"_

Comando utilizado: `docker compose up -d database`

---

![Docker Desktop executanto os serviços de Banco de Dados e API!](/assets/images/docker-desktop-full.png 'Docker Desktop executanto os serviços de Banco de Dados e API') _"Docker Desktop executanto os serviços de Banco de Dados e API"_

Comando utilizado: `docker compose up -d`

## Ci/CD

### GitHub Actions

![DockerHub!](/assets/images/github-actions-01.png 'DockerHub')
![DockerHub!](/assets/images/github-actions-02.png 'DockerHub') _"GitHub Actions"_

### DockerHub

![DockerHub!](/assets/images/dockerhub.png 'DockerHub') _"DockerHub"_

### Render

![Render!](/assets/images/render.png 'Render') _"Render"_

## Observabilidade

![Docker Desktop executanto os serviços de Banco de Dados, API e observabilidade!](/assets/images/docker-desktop-observabilidade.png 'Docker Desktop executanto os serviços de Banco de Dados, API e observabilidade') _"Docker Desktop executanto os serviços de Banco de Dados, API e observabilidade"_

### Prometheus

![Prometheus Query Examplo!](/assets/images/prometheus-query.png 'Prometheus Query Examplo') _"Prometheus Query Examplo"_

### Grafana

![Grafana Dashboard Node.js!](/assets/images/grafana-dashboard-nodejs.png 'Grafana Dashboard Node.js') _"Grafana Dashboard Node.js"_

## Documentação

### Swagger

![Swagger!](/assets/images/swagger.png 'Swagger') _"Swagger"_

## Rotas HTTP

### Healthcheck

- `GET` Get API Status `/status`

### Role

- `GET` Find All Roles `/roles`

### Post

- `DELETE` Delete Post `/posts`
- `GET` Find All Posts `/posts`
- `GET` Find Post `/posts`
- `POST` Create Post `/posts`
- `PUT` Update Post `/posts`

### Post Log

- `GET` Find All PostLogs `/post-logs`

### User

- `GET` Find All Users `/users`
- `POST` Create User `/users`
