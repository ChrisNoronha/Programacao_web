# Wish Ajuda Humanitária

## Descrição
Este é um projeto de uma aplicação web para a plataforma Wish Ajuda Humanitária. A aplicação permite aos usuários se registrarem, fazer login, enviar mensagens, editar perfil e editar ou deletar suas próprias mensagens.

## Pré-requisitos
- Node.js
- npm (Node Package Manager)
- PostgreSQL

## Instalação

### Passo 1: Instalar Node.js e npm
Caso ainda não tenha o Node.js e o npm instalados, você pode baixá-los do [site oficial do Node.js](https://nodejs.org/).

### Passo 2: Instalar PostgreSQL
Se ainda não tiver o PostgreSQL instalado, instale-o seguindo as instruções da [documentação oficial](https://www.postgresql.org/download/).

### Passo 3: Criar Banco de Dados e Usuário no PostgreSQL
CREATE DATABASE mensagem_db;
CREATE USER mensagem_user WITH ENCRYPTED PASSWORD 'sua_senha';
GRANT ALL PRIVILEGES ON DATABASE mensagem_db TO mensagem_user;
Passo 4: Clonar o Repositório

### Clone o repositório do projeto para sua máquina local:

bash

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

### Passo 5: Instalar Dependências

Instale as dependências do projeto utilizando o npm:

bash

npm install express body-parser express-session passport passport-local bcryptjs sequelize pg pg-hstore


## Passo 6: Configurar o Banco de Dados

No diretório do projeto, configure o acesso ao banco de dados no arquivo config/database.js:

js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mensagem_db', 'mensagem_user', 'sua_senha', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;

### Passo 7: Rodar o Projeto

Inicie o servidor Node.js:

bash

node server.js

O servidor estará rodando em http://localhost:3000.

## Estrutura do Projeto

    server.js: Arquivo principal que configura e inicia o servidor Express.
    config/: Contém configurações do banco de dados e do Passport.
        database.js: Configuração do Sequelize para conectar ao banco de dados PostgreSQL.
        passport.js: Configuração do Passport para autenticação.
    models/: Contém os modelos Sequelize para o banco de dados.
        User.js: Modelo para os usuários.
        Message.js: Modelo para as mensagens.
    views/: Contém os arquivos HTML para as páginas da aplicação.
        comunidade.html: Página principal que exibe as mensagens e os formulários de login e registro.
        send.html: Página para enviar uma nova mensagem.
        edit-profile.html: Página para editar o perfil do usuário.

## Funcionalidades

    Registro de Usuário: Usuários podem se registrar fornecendo um nome de usuário único e uma senha.
    Login de Usuário: Usuários registrados podem fazer login com seu nome de usuário e senha.
    Envio de Mensagens: Usuários logados podem enviar novas mensagens.
    Edição de Perfil: Usuários logados podem editar seu nome de usuário e senha.
    Edição e Exclusão de Mensagens: Usuários podem editar ou excluir suas próprias mensagens.

## Tecnologias Utilizadas

    Node.js
    Express.js
    PostgreSQL
    Sequelize (ORM)
    Passport.js (autenticação)
    HTML
    Bootstrap (CSS)

## Contato

Desenvolvido pelo gaúcho Christian Noronha Picoli. Para mais informações, entre em contato pelo email: nchristianpicoli@gmail.com

