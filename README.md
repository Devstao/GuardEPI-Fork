# GuardEPI - Sistema de gerenciamento de EPI

## Tecnologias

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Quart](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Celery](https://img.shields.io/badge/celery-%23a9cc54.svg?style=for-the-badge&logo=celery&logoColor=ddf4a4)

## Índice

- [O Repositório](#o-repositório)
- [📋 Documentação Completa](./DOCUMENTACAO_COMPLETA.md)
- [🔧 Variáveis de Ambiente](./VARIAVEIS_AMBIENTE.md)
- [🚀 Como Executar](./CONTRIBUTING.md)
- [📄 Licença](./LICENSE)

## O Repositório

Este repositório é onde desenvolvemos o [GuardEPI](https://guardepi.com.br), nosso sistema de gerenciamento de EPI

### 🎯 Principais Funcionalidades

O sistema conta com as seguintes funcionalidades:

- **Controle de estoque completo**, incluindo:
  - Registro de entradas
  - Registro de saídas
  - Controle de estoque geral
  - Controle de estoque por grade (tamanhos)
  - Alertas de estoque baixo
- **Gerenciamento de funcionários**
  - Cadastro completo de funcionários
  - Controle admissional
  - Histórico de EPIs por funcionário
- **Sistema de notificações automáticas**
  - Alertas de vencimento de EPIs
  - Notificações por email
  - Dashboard de alertas
- **Gestão de EPIs**
  - Categorias, marcas e modelos
  - Fornecedores
  - Certificações (CA)
- **Sistema de cautelas**
  - Emissão de EPIs para funcionários
  - Controle de devoluções
  - Assinatura digital
- **Dashboard corporativo**
  - Métricas em tempo real
  - Relatórios gerenciais
  - Análises de consumo

### 📚 Documentação

- **[📋 Documentação Completa](./DOCUMENTACAO_COMPLETA.md)** - Guia completo de todas as funcionalidades
- **[🔧 Variáveis de Ambiente](./VARIAVEIS_AMBIENTE.md)** - Todas as variáveis necessárias para configurar o sistema
- **[🚀 Como Executar](./CONTRIBUTING.md)** - Instruções para rodar o projeto localmente

### 🛠️ Tecnologias Utilizadas

- **Backend**: Python 3.13+ com Quart (framework assíncrono)
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
- **Banco de Dados**: PostgreSQL com SQLAlchemy ORM
- **Cache**: Redis
- **Processamento Assíncrono**: Celery
- **Autenticação**: JWT com Quart-Auth
- **Containerização**: Docker e Docker Compose

### 🚀 Início Rápido

1. Clone o repositório
2. Copie `.env.example` para `.env` e configure as variáveis
3. Execute com Docker: `docker compose up`
4. Acesse: `http://localhost:5002`

Para instruções detalhadas, consulte a [documentação de como executar](./CONTRIBUTING.md).


