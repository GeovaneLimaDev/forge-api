# Forge API

O **Forge** é uma plataforma para organizar seus projetos pessoais em um só lugar. Cada projeto reúne documentação, notas e um kanban de funcionalidades com checklist, e uma agenda do dia mostra o que precisa ser feito hoje. Este repositório contém a API REST (Node.js, Express e MySQL) que alimenta a plataforma.

> Projeto em desenvolvimento. Veja a seção Status para saber o que já está pronto.

## Funcionalidades

- **Autenticação** com JWT (registro e login)
- **Projetos**: criação e gerenciamento, com data de entrega
- **Documentação** de cada projeto
- **Notas** avulsas
- **Kanban de funcionalidades** com checklist embutido e data de realização
- **Agenda do dia**: reúne tarefas avulsas, funcionalidades e projetos com data para hoje
- **Histórico** de atividades, incluindo itens que ficaram atrasados
- **Planejar Projeto (IA)**: a partir do objetivo informado, gera documentação inicial, lista de funcionalidades e checklist *(em desenvolvimento)*

## Tecnologias

- [Node.js](https://nodejs.org/) + [Express 5](https://expressjs.com/)
- [Sequelize](https://sequelize.org/) + [MySQL](https://www.mysql.com/)
- [Zod](https://zod.dev/) para validação de dados
- JWT (`jsonwebtoken`) e `bcryptjs` para autenticação
- [Helmet](https://helmetjs.github.io/) para headers de segurança
- [Vitest](https://vitest.dev/) para testes *(em breve)*
- Docker *(em breve)* e Swagger/OpenAPI *(em breve)*

## Modelagem

Entidades principais: `User`, `Project`, `Documentation`, `Note`, `Feature`, `DailyTask` e `Session`.

<!-- TODO: adicionar um diagrama ER (pode ser gerado com dbdiagram.io ou Mermaid) e colar aqui como imagem -->
<img width="1122" alt="image" src="https://github.com/user-attachments/assets/3524a8de-d095-489c-9177-cf5cfe07ee67" />



## Como rodar

### Pré-requisitos

- Node.js 20+ <!-- TODO: confirmar a versão que você usa -->
- MySQL em execução

### Passo a passo

```bash
# 1. Clonar o repositório
git clone https://github.com/GeovaneLimaDev/forge-api.git
cd forge-api

# 2. Instalar as dependências
npm install

# 3. Configurar as variáveis de ambiente
cp .env.example .env
# edite o .env com os dados do seu banco

# 4. Iniciar em modo de desenvolvimento
npm run dev
```

### Variáveis de ambiente
 
O projeto usa um arquivo `.env`. Use o `.env.example` como base e preencha com os dados do seu banco e a chave do JWT.

## Endpoints
 
Todas as rotas, exceto `/auth/register` e `/auth/login`, exigem o header `Authorization: Bearer <token>`.
 
<!-- TODO: conferir cada rota com o código em src/ (método, caminho e nome dos campos). Os caminhos abaixo seguem o padrão REST e podem diferir dos reais. Quando o Swagger estiver pronto, trocar tudo por um link para /api-docs. -->
 
### Autenticação
 
| Método | Rota | Descrição |
| --- | --- | --- |
| POST | `/auth/register` | Cria um usuário (`userName`, `email`, `password`) |
| POST | `/auth/login` | Autentica e retorna o token |
| POST | `/auth/logout` | Encerra a sessão atual |
| GET | `/auth/refresh` | Faz a requisição de novos Tokens de acesso |
 
### Projetos
 
| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/project` | Lista os projetos do usuário |
| POST | `/project` | Cria um projeto (`name`, `description`, `deadline`) |
| GET | `/project/:id` | Retorna um projeto |
| PATCH | `/project/:id` | Atualiza um projeto |
| DELETE | `/project/:id` | Remove um projeto |
 
### Funcionalidades (kanban)
 
<!-- TODO: confirmar o prefixo /features no arquivo principal (app.use) -->
 
| Método | Rota | Descrição |
| --- | --- | --- |
| POST | `/features/:projectId` | Cria uma funcionalidade no projeto (`name`, `description`, `status`, `date`) |
| GET | `/features/:projectId` | Lista as funcionalidades do projeto |
| PATCH | `/features/:projectId/:featureId` | Edita uma funcionalidade |
| DELETE | `/features/:projectId/:featureId` | Remove uma funcionalidade |
 
### Notas
 
<!-- TODO: confirmar o prefixo /notes no arquivo principal (app.use) -->
 
| Método | Rota | Descrição |
| --- | --- | --- |
| POST | `/notes/:projectId` | Cria uma nota no projeto (`title`, `content`) |
| GET | `/notes/:projectId` | Lista as notas do projeto |
| GET | `/notes/:projectId/:noteId` | Retorna uma nota |
| PATCH | `/notes/:projectId/:noteId` | Edita uma nota |
| DELETE | `/notes/:projectId/:noteId` | Remove uma nota |
 
### Documentação
 
Cada projeto tem uma única documentação, por isso não há rotas de criação e exclusão.
 
<!-- TODO: confirmar o prefixo /documentation no arquivo principal (app.use) -->
 
| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/documentation/:projectId` | Retorna a documentação do projeto |
| PATCH | `/documentation/:projectId` | Edita a documentação (`title`, `content`) |
 
### Tarefas
 
| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/tasks` | Lista as tarefas do usuário |
| POST | `/tasks` | Cria uma tarefa (`title`, `description`, `date`) |
| PUT | `/tasks/:id` | Atualiza uma tarefa (inclusive o `status`) |
| DELETE | `/tasks/:id` | Remove uma tarefa |
 
### Agenda do dia
 
| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/day-view?date=YYYY-MM-DD` | Reúne tarefas, funcionalidades e projetos da data informada, com o campo `type` em cada item |
 

## Testes

```bash
npm test
```

## Status

- [x] Autenticação
- [x] Projetos, documentação, notas e funcionalidades
- [x] Agenda do dia
- [ ] Funcionalidade de IA (Planejar Projeto)
- [ ] Testes automatizados
- [ ] Documentação com Swagger
- [ ] Docker

<!-- TODO: ajustar os checkboxes conforme o que estiver realmente pronto -->

## Próximos passos

- Lembretes e notificações, com sugestão de adiar tarefas não concluídas
- Horário nas datas de tarefas, funcionalidades e projetos (hoje só guardam o dia)
- Front-end consumindo a API

## Autor

Feito por [Geovane Lima](https://github.com/GeovaneLimaDev).
