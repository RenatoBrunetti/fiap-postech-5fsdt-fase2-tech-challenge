# Blog API - Tech Challenge

O **Blog API** é um serviço RESTful desenvolvido como parte do **Desafio Técnico da Pós-Graduação de Full Stack Development da FIAP Postech (5FSDT - Fase2)**. Seu principal objetivo é fornecer uma camada de back-end robusta e escalável para uma aplicação de blog, centralizando as regras de negócio e expondo endpoints para gerenciamento de usuários e postagens.

O projeto foi construído com foco em boas práticas de desenvolvimento e aplicando os princípios da arquitetura limpa, o que favorece a clareza, a organização e a facilidade de manutenção do código. A implementação foi realizada pelos alunos listados abaixo, com seus respectivos registros acadêmicos.

`* Eduarda Campos Aragão / RM365002`<br>
`* Esdras Correa / RM361922`<br>
`* Rafael Lucianetti Oliveira / RM361704`<br>
`* Renato Carapiá Brunetti / RM362132`<br>

# ⛭ Informações Técnicas

## → Arquitetura

A arquitetura utilizada no projeto foi baseada na **Arquitetura Limpa** ou **Clean Architecture** com foco na organização do código, para que o mesmo seja claro, modular e independente de tecnologias externas. Assim, garantimos que as regras de negócio fiquem no centro da aplicação, separadas de detalhes como banco de dados, frameworks e interfaces.

Essa separação traz como principal vantagem a clareza na estrutura do projeto, o que facilita tanto a criação quanto a manutenção do código. Com responsabilidades bem definidas, torna-se mais simples entender, testar e evoluir o sistema ao longo do tempo, além de reduzir o acoplamento entre as partes, além de favorecer a escalabilidade, a legibilidade e a colaboração entre desenvolvedores.

![Diagrama de arquitetura!](/assets/images/arch-app-diagram.png 'Diagrama de arquitetura') _"Diagrama de arquitetura"_

### + Descrição técnica de funcionalidades

- As requisições HTTP são recebidas na **API REST** através do sistema de **Rotas da API** que implementam os **Controladores** de acordo com os métodos e os parâmetros recebidos.
- Os **Controladores** implementam as **Fábricas** dos **Casos de Usos** de acordo com o que é recebido através das requisções.
- Os **Casos de Usos** implementam individualmente cada um dos métodos dos **Repositórios**.
- Os **Repositórios** implementam os métodos que interagem com o banco de dados através das **Bibliotecas**.
- As **Bibliotecas** implementam os **Drivers** dos bancos de dados ou o **ORM** para intermediar as consultas ao banco de dados de acrodo com os modelos das **Entidades**.
- As **Entidades** implementam e refletem as definições das tabelas e colunas existentes no banco de dados.

### + Descrição do fluxo de requisições

1. A requisição HTTP é recebida na API REST através do sistema de rotas;
2. O sistema de rotas direciona a requisição para o Contralador;
3. O Controlador executa a validação dos parâmetros recebidos e executa a Fábrica do Caso de Uso;
4. O Caso de Uso executa o Repositório;
5. O Repositório executa a validação das informações de acordo com a Entidadee executa a Biblioteca;
6. A Biblioteca executa o Driver do banco de dados ou o ORM e executa a consulta ao Banco de Dados;
7. O Banco de Dados recebe a consulta e retorna as informações para a Biblioteca;
8. A Biblioteca retorna as informações para o Repositório;
9. O Repositório retorna as informações para o Caso de Uso;
10. O Caso de Uso retorna as informações para o Controlador;
11. O Controlador retorna a resposta da requisição HTTP;

## → Banco de Dados

Para a persistência dos dados, foi utilizado o **PostgreSQL**, um banco de dados relacional robusto, amplamente adotado no mercado por sua confiabilidade, desempenho e recursos avançados.

A escolha por um banco relacional se deu devido à natureza do domínio da aplicação, que exige o gerenciamento de relações bem definidas entre entidades, como usuários e postagens. Esse modelo facilita a integridade dos dados e o uso de joins para consultas complexas.

O **PostgreSQL** foi escolhido por sua praticidade, compatibilidade com ferramentas modernas de desenvolvimento (como ORMs), e por oferecer um ótimo equilíbrio entre facilidade de uso e recursos avançados para aplicações em produção.

![Diagrama do banco de dados!](/assets/images/db-diagram.png 'Diagrama do banco de dados') _"Diagrama do banco de dados"_

### + Descrição das tabelas

- `role`: Responsável por armazenar os tipos possíveis para usuários.
- `user`: Responsável por armazenar os usuários cadastrados.
- `post`: Responsável por armazenar as postagens cadastradas.
- `post_log`: Responsável por armazenar os logs de manipulação das postagens.

### + ORM

Para o mapeamento objeto-relacional, foi utilizado o TypeORM, uma das bibliotecas ORM mais populares no ecossistema Node.js e totalmente compatível com TypeScript.

A escolha pelo TypeORM se deu pela sua integração fluida com o PostgreSQL, suporte a migrations, repositórios personalizados e tipagem estática, o que contribui para uma experiência de desenvolvimento mais segura e produtiva. Com ele, foi possível definir as entidades de forma clara e concisa, mantendo a consistência entre o código e a estrutura do banco de dados.

Além disso, o TypeORM se alinha bem com os princípios da arquitetura limpa, pois permite isolar a camada de persistência sem acoplar diretamente a lógica de negócio às implementações específicas do banco de dados.

## → Containers

Os containers são unidades leves, portáteis e isoladas que empacotam uma aplicação junto com todas as suas dependências, garantindo que o software funcione de forma consistente em diferentes ambientes. Eles ajudam a evitar problemas de configuração e facilitam a implantação e escalabilidade da aplicação.

### + Docker

O Docker é a plataforma mais utilizada para a criação e gerenciamento de containers. Ele permite que os desenvolvedores definam ambientes completos de forma reproduzível, automatizando a construção, execução e distribuição de aplicações. No projeto, o Docker foi utilizado para containerizar tanto a aplicação Node.js, quanto o banco de dados PostgreSQL e também os serviços de observabilidade Prometheus e Grafana, promovendo padronização e facilidade no setup do ambiente.

![Docker Desktop executanto o serviço de Banco de Dados!](/assets/images/docker-desktop-database.png 'Docker Desktop executanto o serviço de Banco de Dados') _"Docker Desktop executanto o serviço de Banco de Dados"_

Comando utilizado: `docker compose up -d database`

![Docker Desktop executanto os serviços de Banco de Dados, API e observabilidade!](/assets/images/docker-desktop-observabilidade.png 'Docker Desktop executanto os serviços de Banco de Dados, API e observabilidade') _"Docker Desktop executanto os serviços de Banco de Dados, API e observabilidade"_

Comando utilizado: `docker compose up -d`

### + Docker Compose

O Docker Compose é uma ferramenta que permite orquestrar múltiplos containers de forma simples, por meio de um arquivo YAML. No projeto, ele foi utilizado para configurar e executar os serviços da aplicação, banco de dados e ferramentas de observabilidade de forma integrada, facilitando o desenvolvimento, testes e manutenção do sistema como um todo.

### + DockerHub

O DockerHub é um repositório de imagens Docker na nuvem. Ele permite armazenar, versionar e distribuir imagens de containers. No projeto, foi utilizado para hospedar a imagem da aplicação Node.js gerada automaticamente pela pipeline de CI, facilitando o deploy em ambientes externos.

🔗 [Veja a imagem docker do projeto](https://hub.docker.com/repository/docker/renatobrunetti/challenge) _"Link temporário para avaliação"_

![Imagem do App no DockerHub!](/assets/images/dockerhub.png 'Imagem do App no DockerHub') _"Imagem do App no DockerHub"_

## → Observabilidade

Observabilidade é a capacidade de entender o que está acontecendo dentro de um sistema por meio da coleta e análise de dados como logs, métricas e traces. No projeto, a observabilidade foi implementada para facilitar o monitoramento do comportamento da aplicação, identificar falhas rapidamente e garantir maior confiabilidade durante o desenvolvimento e a execução dos serviços em containers.

🔗 [Veja as métricas do projeto em tempo real](https://challenge-2wqh.onrender.com/metrics) _"Link temporário para avaliação"_

### + Prometheus

O Prometheus é uma ferramenta de monitoramento e coleta de métricas voltada para sistemas distribuídos. Ele armazena séries temporais de dados e permite a criação de alertas com base em consultas. No projeto, o Prometheus foi utilizado para coletar métricas do serviço principal da aplicação em Node.js, fornecendo uma base sólida para análise de desempenho e saúde da aplicação.

![Exemplo de consulta no Prometheus da aplicação!](/assets/images/prometheus-query.png 'Exemplo de consulta no Prometheus da aplicação') _"Exemplo de consulta no Prometheus da aplicação"_

### + Grafana

O Grafana é uma plataforma de visualização de dados que permite criar painéis interativos a partir de diversas fontes, incluindo o Prometheus. No projeto, o Grafana foi usado para exibir visualmente as métricas coletadas, facilitando a análise e o monitoramento contínuo da aplicação de forma intuitiva e acessível.

![Exemplo de Dashboard da aplicação!](/assets/images/grafana-dashboard-nodejs.png 'Exemplo de Dashboard da aplicação') _"Exemplo de Dashboard da aplicação"_

## → Integração Contínua e Entrega/Implementação Contínua - CI/CD

CI/CD (Integração Contínua e Entrega/Implantação Contínua) é uma prática essencial em DevOps que automatiza os processos de teste, build e deploy de aplicações. Com CI/CD, o código passa por validações automatizadas sempre que há mudanças, garantindo maior qualidade, agilidade e segurança nas entregas.

### + GitHub Actions

O GitHub Actions é a ferramenta de automação do GitHub que permite configurar pipelines de CI/CD diretamente no repositório. No projeto, foi utilizado para automatizar testes, builds e o envio de imagens Docker para o DockerHub, garantindo que cada alteração no código seja validada e integrada ao fluxo de entrega de forma eficiente.

![GitHub Actions!](/assets/images/github-actions-01.png 'GitHub Actions')
![GitHub Actions!](/assets/images/github-actions-02.png 'GitHub Actions') _"GitHub Actions"_

### + Render

O Render é uma plataforma de cloud moderna que facilita o deploy de aplicações e bancos de dados com pipelines automatizadas. No projeto, foi utilizado para publicar a API e o banco de dados PostgreSQL em ambiente de produção, conectando-se diretamente ao DockerHub para obter a imagem da aplicação.

🔗 [Teste a aplicação em tempo real](https://challenge-2wqh.onrender.com/) _"Link temporário para avaliação"_

![Render!](/assets/images/render.png 'Render') _"Render"_

## → Documentação

A documentação é uma parte essencial do desenvolvimento de software, pois facilita o entendimento, o uso e a manutenção da aplicação por outros desenvolvedores e stakeholders. No projeto, a documentação foi elaborada com foco na clareza e na organização das funcionalidades e estruturas da API, contribuindo para um desenvolvimento colaborativo e sustentável.

🔗 [Veja a documentação em tempo real](https://challenge-2wqh.onrender.com/docs) _"Link temporário para avaliação"_

### + Swagger

O Swagger é uma ferramenta amplamente utilizada para a documentação técnica de APIs REST. Ele permite descrever endpoints, parâmetros, métodos HTTP e respostas de forma padronizada e interativa. No projeto, o Swagger foi integrado à aplicação para fornecer uma interface acessível e autoexplicativa que facilita o teste e a compreensão das rotas disponíveis na API.

![Swagger!](/assets/images/swagger.png 'Swagger') _"Swagger"_

## → Tecnologias utilizadas

> Clique para visualizar a descrição de cada item

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
<br>

## Rotas e Métodos HTTP

- **Healthcheck**
  - `GET` Get API Status `/status`
- **Role**
  - `GET` Find All Roles `/roles`
- **Post**
  - `DELETE` Delete Post `/posts`
  - `GET` Find All Posts `/posts`
  - `GET` Find Post `/posts`
  - `POST` Create Post `/posts`
  - `PUT` Update Post `/posts`
- **Post Log**
  - `GET` Find All PostLogs `/post-logs`
- **User**
  - `GET` Find All Users `/users`
  - `POST` Create User `/users`

# ▶ Como executar o projeto

## → Executar em ambiente local de desenvolvimento

### + Requisitos

1. Instalar o Docker
2. Instalar o Docker Compose
3. Instalar o Node.js

### + Execução

1. Adicionar um arquivo `.env` na raiz do projeto com todas as variáveis de ambiente cadastradas, e que podem ser encontradas no arquivo `.env.example`.
2. Executar o comando `npm i` ou `npm install` para instalar as dependências do projeto na pasta `node_modules` na raiz do projeto.
3. Executar o comando `docker compose up -d database`, que através do **Docker Compose**, irá criar e executar o banco de dados com as tabelas inicialmente cadastradas. Dessa forma, O banco de dados e suas informações serão persistidas e salvas na pasta `data`, na raiz do projeto.
4. Executar o comando `npm run start:dev` para executar a aplicação.

## → Executar em ambiente local de teste

### + Requisitos

1. Instalar o Docker
2. Instalar o Docker Compose

### + Execução

1. Adicionar um arquivo `.env` na raiz do projeto com todas as variáveis de ambiente cadastradas, e que podem ser encontradas no arquivo `.env.example`.
2. Executar o comando `docker compose up -d`, que através do **Docker Compose**, irá criar e executar o banco de dados com as tabelas inicialmente cadastradas e também executar a aplicação **Node.js** que ficará disponível através da porta cadastrada no arquivo `.env`. Dessa forma, o banco de dados e suas informações serão persistidas e salvas na pasta `data` na raiz do projeto.

# 🌐 Acessar o projeto em Produção

A aplicação está hospedada na plataforma Render e está temporariamente disponível para fins de avaliação. Por se tratar de um plano gratuito, a instância entra em modo de hibernação quando não está em uso, o que pode causar um tempo de carregamento inicial de até 30 segundos após períodos de inatividade.
Após esse carregamento inicial, os endpoints da API funcionam normalmente. Recomendamos aguardar esse tempo na primeira requisição e, se necessário, realizar novas chamadas após a ativação do serviço.

**API URL**: https://challenge-2wqh.onrender.com

**Documentação (Swagger)**: https://challenge-2wqh.onrender.com/docs

**Métricas (Prometheus)**: https://challenge-2wqh.onrender.com/metrics

# ☑ Fluxo de requisições sugeridas para avaliação

## 1. Verificar o `Status` da aplicação

**Descrição:** Esta rota é utilizada para verificar se a aplicação está online e funcionando corretamente. Ela retorna uma resposta simples, indicando que o servidor está ativo e pronto para receber requisições.

**Endpoint:** `GET`: `https://challenge-2wqh.onrender.com/status`

**Resposta Esperada:**

StatusCode: `200`

```json
{
  "statusCode": 200,
  "status": "ok"
}
```

## 2. Listar as permissões `Roles` disponíveis

**Descrição:** Esta rota retorna a lista de permissões (roles) disponíveis para a criação de usuários no sistema. As opções atualmente disponíveis são: admin e student.

**Endpoint:** `GET`: `https://challenge-2wqh.onrender.com/roles`

**Resposta Esperada:**

StatusCode: `200`

```json
[
  {
    "id": "f5734ad8-8646-4882-ad4c-4c360efa0d17",
    "name": "admin",
    "description": "Administrator with full access",
    "created_at": "2025-08-04T23:37:15.496Z",
    "updated_at": "2025-08-04T23:37:15.496Z"
  },
  {
    "id": "218cf765-cef0-4f5c-a4d9-a61711d12c35",
    "name": "student",
    "description": "Student with limited access",
    "created_at": "2025-08-04T23:37:15.496Z",
    "updated_at": "2025-08-04T23:37:15.496Z"
  }
]
```

## 3. Criar um novo usuário `User` Professor

**Descrição:** Esta rota permite criar um novo usuário no sistema, recebendo os dados necessários como `username`, `password` e `role_id` (referente a admin ou student) no corpo da requisição. As informações são validadas e, em caso de sucesso, o usuário é armazenado no banco de dados.

**Endpoint:** `POST`: `https://challenge-2wqh.onrender.com/users`

**Parâmetros:** `Body`:

```json
{
  "username": "Uncle Ben",
  "password": "secret123",
  "role_id": "f5734ad8-8646-4882-ad4c-4c360efa0d17"
}
```

**Resposta Esperada:**

StatusCode: `201`

```json
{
  "message": "User created successfully"
}
```

## 4. Listar os usuários `Users` disponíveis

**Descrição:** Esta rota retorna a lista de usuários (users) disponíveis para a criação e edição de postagens no sistema.

**Endpoint:** `GET`: `https://challenge-2wqh.onrender.com/users`

**Resposta Esperada:**

StatusCode: `200`

```json
[
  {
    "id": "7880ac4d-d07e-4caf-adf2-3543f8d900f5",
    "username": "Uncle Ben",
    "role_id": "f5734ad8-8646-4882-ad4c-4c360efa0d17",
    "created_at": "2025-08-05T18:24:10.921Z",
    "updated_at": "2025-08-05T18:24:10.921Z"
  }
]
```

## 5. Criar uma nova postagem `Post`

**Descrição:** Esta rota permite criar uma nova postagem no sistema, recebendo os dados necessários como `title`, `content` e `user_id` no corpo da requisição. As informações são validadas e, em caso de sucesso, a postagem é armazenado no banco de dados. Nesta rota, um log de postagem é gerado automaticamente e armazenado na tabela `Post Log` com as informações que relacionam o usuário e a postagem com a ação `create`.

**Endpoint:** `POST`: `https://challenge-2wqh.onrender.com/posts`

**Parâmetros:** `Body`:

```json
{
  "title": "Com grandes poderes vêm grandes responsabilidades",
  "content": "A ideia central é que, com a capacidade de causar um grande impacto no mundo, seja positivo ou negativo, surge a obrigação moral de usar esse poder de forma responsável e para o bem comum.",
  "user_id": "7880ac4d-d07e-4caf-adf2-3543f8d900f5"
}
```

**Resposta Esperada:**

StatusCode: `201`

```json
{
  "message": "Post created successfully"
}
```

## 6. Listar as postagens `Posts` disponíveis

**Descrição:** Esta rota retorna a lista de postagens (posts) disponíveis.

**Endpoint:** `GET`: `https://challenge-2wqh.onrender.com/posts`

**Resposta Esperada:**

StatusCode: `200`

```json
[
  {
    "id": "899059c1-0c8b-4753-9d22-d04622a1865b",
    "title": "Com grandes poderes vêm grandes responsabilidades",
    "content": "A ideia central é que, com a capacidade de causar um grande impacto no mundo, seja positivo ou negativo, surge a obrigação moral de usar esse poder de forma responsável e para o bem comum.",
    "user_id": "7880ac4d-d07e-4caf-adf2-3543f8d900f5",
    "created_at": "2025-08-05T18:34:44.014Z",
    "updated_at": "2025-08-05T18:34:44.014Z"
  }
]
```

## 7. Retornar postagem `Post` através do identificador

**Descrição:** Esta rota retorna uma única postagem (post) através da busca pelo seu identificador.

**Endpoint:** `GET`: `https://challenge-2wqh.onrender.com/posts/899059c1-0c8b-4753-9d22-d04622a1865b`

**Resposta Esperada:**

StatusCode: `200`

```json
{
  "id": "899059c1-0c8b-4753-9d22-d04622a1865b",
  "title": "Com grandes poderes vêm grandes responsabilidades",
  "content": "A ideia central é que, com a capacidade de causar um grande impacto no mundo, seja positivo ou negativo, surge a obrigação moral de usar esse poder de forma responsável e para o bem comum.",
  "user_id": "7880ac4d-d07e-4caf-adf2-3543f8d900f5",
  "created_at": "2025-08-05T18:34:44.014Z",
  "updated_at": "2025-08-05T18:34:44.014Z"
}
```

## 8. Listar as postagens `Posts` através da busca pelo título ou conteúdo

**Descrição:** Esta rota retorna uma lista de postagens (post) através da busca por parte do título ou conteúdo.

**Endpoint:** `GET`: `https://challenge-2wqh.onrender.com/posts/search`

**Parâmetros:** `Query`:

```
search: responsabilidades
```

**Resposta Esperada:**

StatusCode: `200`

```json
[
  {
    "id": "899059c1-0c8b-4753-9d22-d04622a1865b",
    "title": "Com grandes poderes vêm grandes responsabilidades",
    "content": "A ideia central é que, com a capacidade de causar um grande impacto no mundo, seja positivo ou negativo, surge a obrigação moral de usar esse poder de forma responsável e para o bem comum.",
    "user_id": "7880ac4d-d07e-4caf-adf2-3543f8d900f5",
    "created_at": "2025-08-05T18:34:44.014Z",
    "updated_at": "2025-08-05T18:34:44.014Z"
  }
]
```

## 9. Editar uma postagem `Post`

**Descrição:** Esta rota permite editar uma postagem no sistema, recebendo pelo menos um dos dois dados necessários `title` ou `content` e `user_id` que é obrigatório no corpo da requisição. As informações são validadas e, em caso de sucesso, a postagem é alterada no banco de dados. Nesta rota, um log de postagem é gerado automaticamente e armazenado na tabela `Post Log` com as informações que relacionam o usuário e a postagem com a ação `update`.

**Endpoint:** `PUT`: `https://challenge-2wqh.onrender.com/posts/899059c1-0c8b-4753-9d22-d04622a1865b`

**Parâmetros:** `Body`:

```json
{
  "content": "A frase tem origem nos quadrinhos da Marvel, mais especificamente na história de Peter Parker, o Homem-Aranha. A ideia central é que, com a capacidade de causar um grande impacto no mundo, seja positivo ou negativo, surge a obrigação moral de usar esse poder de forma responsável e para o bem comum.",
  "user_id": "7880ac4d-d07e-4caf-adf2-3543f8d900f5"
}
```

**Resposta Esperada:**

StatusCode: `200`

```json
{
  "id": "899059c1-0c8b-4753-9d22-d04622a1865b",
  "content": "A frase tem origem nos quadrinhos da Marvel, mais especificamente na história de Peter Parker, o Homem-Aranha. A ideia central é que, com a capacidade de causar um grande impacto no mundo, seja positivo ou negativo, surge a obrigação moral de usar esse poder de forma responsável e para o bem comum.",
  "user_id": "7880ac4d-d07e-4caf-adf2-3543f8d900f5",
  "updated_at": "2025-08-05T18:52:02.672Z"
}
```

## 10. Deletar postagem `Post` através do identificador

**Descrição:** Esta rota deleta permanentemente uma postagem (post) através do seu identificador.

**Endpoint:** `DELETE`: `https://challenge-2wqh.onrender.com/posts/899059c1-0c8b-4753-9d22-d04622a1865b`

**Resposta Esperada:**

StatusCode: `200`

```json
{
  "message": "Post deleted successfully"
}
```

## 11. Listar as métricas do Prometheus

**Descrição:** Esta rota está temporariamente pública para avaliação. Ela retorna uma lista métricas da API coletadas pelo serviço do Prometheus.

**Endpoint:** `GET`: `https://challenge-2wqh.onrender.com/metrics`

**Resposta Esperada:**

StatusCode: `200`

```txt
# HELP process_cpu_user_seconds_total Total user CPU time spent in seconds.
# TYPE process_cpu_user_seconds_total counter
process_cpu_user_seconds_total 5.090978

# HELP process_cpu_system_seconds_total Total system CPU time spent in seconds.
# TYPE process_cpu_system_seconds_total counter
process_cpu_system_seconds_total 2.6979070000000003
...
```

# ⛬ Experiências e Desafios

Desenvolver a Blog API foi uma experiência rica em aprendizado técnico e colaborativo. A aplicação reúne diversas tecnologias modernas e boas práticas de desenvolvimento de software, o que exigiu planejamento, organização e constante troca de conhecimentos entre os membros da equipe.

Um dos principais desafios enfrentados foi a aplicação dos princípios da arquitetura limpa, que exigiu uma estrutura clara e bem separada entre camadas como entidades, casos de uso, controladores e repositórios. Essa abordagem, embora complexa no início, trouxe muitos benefícios, como maior legibilidade, facilidade de manutenção e escalabilidade.

Outro ponto desafiador foi a containerização completa da aplicação com Docker e Docker Compose, incluindo não apenas a API e o banco de dados PostgreSQL, mas também ferramentas de observabilidade como Prometheus e Grafana. Foi necessário entender a orquestração dos serviços, configuração de volumes, redes e variáveis de ambiente para garantir que tudo funcionasse de forma integrada.

A implementação do CI/CD com GitHub Actions e a publicação da aplicação em produção na plataforma Render também representaram etapas importantes. Configurar pipelines que automatizassem testes, build da imagem Docker e deploy exigiu atenção aos detalhes e ajustes constantes até atingir um fluxo confiável.

Além disso, tivemos o desafio de documentar toda a API de forma clara e acessível com o Swagger, o que se mostrou fundamental para facilitar o uso, os testes e a avaliação do sistema.

Como equipe, ganhamos experiência prática com ferramentas e conceitos essenciais para projetos reais, como: versionamento de código, code review, integração contínua, deploy automatizado, testes automatizados com Jest, organização de entidades com TypeORM, além de boas práticas com ESLint, Prettier e TypeScript.

No fim, o projeto consolidou importantes aprendizados sobre como construir e entregar uma aplicação back-end robusta, moderna e preparada para ambientes de produção — da ideia inicial até o deploy em nuvem.
