# 🔧 GuardEPI - Variáveis de Ambiente

Este documento contém todas as variáveis de ambiente necessárias para configurar e executar o sistema GuardEPI corretamente.

## 📋 Índice

1. [Configuração Básica](#configuração-básica)
2. [Banco de Dados](#banco-de-dados)
3. [Email/SMTP](#emailsmtp)
4. [Redis](#redis)
5. [Segurança](#segurança)
6. [Aplicação](#aplicação)
7. [Desenvolvimento](#desenvolvimento)
8. [Exemplo de Arquivo .env](#exemplo-de-arquivo-env)

---

## 🔧 Configuração Básica

### AMBIENT_CONFIG
- **Descrição**: Define o ambiente de execução da aplicação
- **Valores**: `development` | `production` | `testing`
- **Obrigatório**: ✅ Sim
- **Exemplo**: `AMBIENT_CONFIG=development`

### SECRET_KEY
- **Descrição**: Chave secreta para criptografia de sessões e tokens JWT
- **Tipo**: String aleatória e segura
- **Obrigatório**: ✅ Sim (em produção)
- **Exemplo**: `SECRET_KEY=sua_chave_secreta_muito_forte_aqui`
- **⚠️ Importante**: Use uma chave forte em produção (pelo menos 32 caracteres)

---

## 🗄️ Banco de Dados

### SETUP_DB
- **Descrição**: Tipo de banco de dados a ser utilizado
- **Valores**: `postgresql` | `mysql` | `sqlite`
- **Obrigatório**: ✅ Sim
- **Exemplo**: `SETUP_DB=postgresql`

### DATABASE_HOST
- **Descrição**: Endereço do servidor de banco de dados
- **Tipo**: String (IP ou hostname)
- **Obrigatório**: ✅ Sim (exceto para SQLite)
- **Exemplo**: `DATABASE_HOST=localhost`
- **Docker**: `DATABASE_HOST=postgres` (nome do serviço)

### DATABASE_PORT
- **Descrição**: Porta do servidor de banco de dados
- **Tipo**: Número inteiro
- **Obrigatório**: ✅ Sim (exceto para SQLite)
- **Valores Padrão**:
  - PostgreSQL: `5432`
  - MySQL: `3306`
- **Exemplo**: `DATABASE_PORT=5432`

### DATABASE_NAME
- **Descrição**: Nome da base de dados
- **Tipo**: String
- **Obrigatório**: ✅ Sim
- **Exemplo**: `DATABASE_NAME=guardepi`

### DATABASE_USER
- **Descrição**: Usuário para conexão com o banco de dados
- **Tipo**: String
- **Obrigatório**: ✅ Sim (exceto para SQLite)
- **Exemplo**: `DATABASE_USER=guardepi_user`

### DATABASE_PW
- **Descrição**: Senha para conexão com o banco de dados
- **Tipo**: String
- **Obrigatório**: ✅ Sim (exceto para SQLite)
- **Exemplo**: `DATABASE_PW=senha_forte_do_banco`
- **⚠️ Importante**: Use senhas fortes em produção

---

## 📧 Email/SMTP

### MAIL_SERVER
- **Descrição**: Servidor SMTP para envio de emails
- **Tipo**: String (hostname)
- **Obrigatório**: ✅ Sim
- **Exemplos**:
  - Gmail: `smtp.gmail.com`
  - Outlook: `smtp-mail.outlook.com`
  - SendGrid: `smtp.sendgrid.net`
- **Exemplo**: `MAIL_SERVER=smtp.gmail.com`

### MAIL_PORT
- **Descrição**: Porta do servidor SMTP
- **Tipo**: Número inteiro
- **Obrigatório**: ✅ Sim
- **Valores Comuns**:
  - `587` (TLS)
  - `465` (SSL)
  - `25` (não criptografado - não recomendado)
- **Exemplo**: `MAIL_PORT=587`

### MAIL_USE_TLS
- **Descrição**: Habilita criptografia TLS para email
- **Valores**: `True` | `False` | `true` | `false`
- **Obrigatório**: ✅ Sim
- **Exemplo**: `MAIL_USE_TLS=True`
- **💡 Dica**: Use `True` para porta 587

### MAIL_USE_SSL
- **Descrição**: Habilita criptografia SSL para email
- **Valores**: `True` | `False` | `true` | `false`
- **Obrigatório**: ✅ Sim
- **Exemplo**: `MAIL_USE_SSL=False`
- **💡 Dica**: Use `True` para porta 465

### MAIL_USERNAME
- **Descrição**: Usuário para autenticação no servidor SMTP
- **Tipo**: String (geralmente o email)
- **Obrigatório**: ✅ Sim
- **Exemplo**: `MAIL_USERNAME=seu-email@empresa.com`

### MAIL_PASSWORD
- **Descrição**: Senha para autenticação no servidor SMTP
- **Tipo**: String
- **Obrigatório**: ✅ Sim
- **Exemplo**: `MAIL_PASSWORD=senha_do_email`
- **⚠️ Gmail**: Use senhas de aplicativo para Gmail

### MAIL_DEFAULT_SENDER
- **Descrição**: Email padrão do remetente
- **Tipo**: String (email válido)
- **Obrigatório**: ✅ Sim
- **Exemplo**: `MAIL_DEFAULT_SENDER=noreply@empresa.com`

---

## 🔴 Redis

### REDIS_URI
- **Descrição**: URI de conexão com o servidor Redis
- **Tipo**: String (URI completa)
- **Obrigatório**: ✅ Sim
- **Formato**: `redis://[senha@]host:porta[/db]`
- **Exemplos**:
  - Local: `redis://localhost:6379`
  - Com senha: `redis://senha@localhost:6379`
  - Docker: `redis://redis:6379`
  - Base específica: `redis://localhost:6379/0`
- **Exemplo**: `REDIS_URI=redis://localhost:6379`

---

## 🔒 Segurança

### CSP_ENABLED
- **Descrição**: Habilita Content Security Policy
- **Valores**: `True` | `False`
- **Obrigatório**: ❌ Não (padrão: True em produção)
- **Exemplo**: `CSP_ENABLED=True`

### HTTPS_ONLY
- **Descrição**: Força uso de HTTPS
- **Valores**: `True` | `False`
- **Obrigatório**: ❌ Não (padrão: True em produção)
- **Exemplo**: `HTTPS_ONLY=True`

---

## 🚀 Aplicação

### PORT
- **Descrição**: Porta na qual a aplicação será executada
- **Tipo**: Número inteiro (1024-65535)
- **Obrigatório**: ❌ Não (padrão: aleatório)
- **Exemplo**: `PORT=5002`
- **Docker**: Deve corresponder à porta exposta no container

### DEBUG
- **Descrição**: Habilita modo de debug
- **Valores**: `True` | `False`
- **Obrigatório**: ❌ Não (padrão: False)
- **Exemplo**: `DEBUG=False`
- **⚠️ Importante**: Sempre `False` em produção

### WORKERS
- **Descrição**: Número de workers Celery
- **Tipo**: Número inteiro
- **Obrigatório**: ❌ Não (padrão: número de CPUs)
- **Exemplo**: `WORKERS=4`

---

## 🛠️ Desenvolvimento

### MIGRATE
- **Descrição**: Executa migrações automáticas do banco
- **Valores**: `True` | `False` | `true` | `false`
- **Obrigatório**: ❌ Não
- **Exemplo**: `MIGRATE=True`
- **💡 Uso**: Útil para desenvolvimento e primeiras execuções

### FLASK_ENV
- **Descrição**: Ambiente do Flask (compatibilidade)
- **Valores**: `development` | `production`
- **Obrigatório**: ❌ Não
- **Exemplo**: `FLASK_ENV=development`

---

## 📄 Exemplo de Arquivo .env

### Para Desenvolvimento Local

```bash
# ====================================
# CONFIGURAÇÃO GERAL
# ====================================
AMBIENT_CONFIG=development
SECRET_KEY=sua_chave_secreta_desenvolvimento_123456789
DEBUG=True
PORT=5002

# ====================================
# BANCO DE DADOS - PostgreSQL Local
# ====================================
SETUP_DB=postgresql
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=guardepi_dev
DATABASE_USER=postgres
DATABASE_PW=postgres123

# ====================================
# REDIS
# ====================================
REDIS_URI=redis://localhost:6379

# ====================================
# EMAIL - Gmail (para desenvolvimento)
# ====================================
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USE_TLS=True
MAIL_USE_SSL=False
MAIL_USERNAME=seu-email@gmail.com
MAIL_PASSWORD=sua_senha_de_aplicativo_gmail
MAIL_DEFAULT_SENDER=noreply-dev@empresa.com

# ====================================
# DESENVOLVIMENTO
# ====================================
MIGRATE=True
FLASK_ENV=development
```

### Para Produção com Docker

```bash
# ====================================
# CONFIGURAÇÃO GERAL
# ====================================
AMBIENT_CONFIG=production
SECRET_KEY=SUA_CHAVE_SUPER_SECRETA_PRODUCAO_COM_32_CARACTERES_OU_MAIS
DEBUG=False
PORT=5002

# ====================================
# BANCO DE DADOS - PostgreSQL Docker
# ====================================
SETUP_DB=postgresql
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_NAME=guardepi
DATABASE_USER=guardepi_user
DATABASE_PW=senha_muito_forte_producao_123

# ====================================
# REDIS - Docker
# ====================================
REDIS_URI=redis://redis:6379

# ====================================
# EMAIL - Servidor SMTP Empresarial
# ====================================
MAIL_SERVER=smtp.empresa.com
MAIL_PORT=587
MAIL_USE_TLS=True
MAIL_USE_SSL=False
MAIL_USERNAME=sistema@empresa.com
MAIL_PASSWORD=senha_sistema_email
MAIL_DEFAULT_SENDER=guardepi@empresa.com

# ====================================
# SEGURANÇA
# ====================================
CSP_ENABLED=True
HTTPS_ONLY=True

# ====================================
# PRODUÇÃO
# ====================================
WORKERS=4
MIGRATE=False
```

### Para Ambiente de Testes

```bash
# ====================================
# CONFIGURAÇÃO GERAL
# ====================================
AMBIENT_CONFIG=testing
SECRET_KEY=chave_teste_123456789
DEBUG=False
PORT=5003

# ====================================
# BANCO DE DADOS - SQLite para Testes
# ====================================
SETUP_DB=sqlite
# Para SQLite, não são necessárias as outras variáveis de DB

# ====================================
# REDIS - Local para Testes
# ====================================
REDIS_URI=redis://localhost:6379/15

# ====================================
# EMAIL - Configuração de Teste
# ====================================
MAIL_SERVER=localhost
MAIL_PORT=1025
MAIL_USE_TLS=False
MAIL_USE_SSL=False
MAIL_USERNAME=teste
MAIL_PASSWORD=teste
MAIL_DEFAULT_SENDER=teste@localhost

# ====================================
# TESTES
# ====================================
MIGRATE=True
FLASK_ENV=testing
```

---

## 🔍 Validação da Configuração

### Checklist de Configuração

#### ✅ Variáveis Obrigatórias
- [ ] `AMBIENT_CONFIG` definido
- [ ] `SECRET_KEY` configurado (forte em produção)
- [ ] Variáveis de banco de dados configuradas
- [ ] `REDIS_URI` configurado
- [ ] Todas as variáveis de email configuradas

#### ✅ Segurança
- [ ] Senhas fortes em produção
- [ ] `DEBUG=False` em produção
- [ ] `SECRET_KEY` único e seguro
- [ ] Credenciais não expostas em repositórios

#### ✅ Conectividade
- [ ] Banco de dados acessível
- [ ] Redis acessível
- [ ] Servidor de email funcionando

### Comandos de Teste

```bash
# Testar conexão com banco de dados
python -c "
import psycopg2
conn = psycopg2.connect(
    host='localhost',
    database='guardepi',
    user='postgres',
    password='postgres123'
)
print('✅ Banco conectado com sucesso!')
"

# Testar conexão com Redis
python -c "
import redis
r = redis.from_url('redis://localhost:6379')
r.ping()
print('✅ Redis conectado com sucesso!')
"

# Testar configuração de email (básico)
python -c "
import smtplib
from email.mime.text import MIMEText

server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
print('✅ Servidor SMTP acessível!')
"
```

---

## 🚨 Troubleshooting

### Problemas Comuns

#### Erro de Conexão com Banco
```
sqlalchemy.exc.OperationalError: connection failed
```
**Soluções**:
- Verificar se o serviço do banco está rodando
- Validar credenciais (usuário/senha)
- Verificar host e porta
- Testar conectividade de rede

#### Erro de Conexão com Redis
```
redis.exceptions.ConnectionError: Error connecting to Redis
```
**Soluções**:
- Verificar se o Redis está rodando
- Validar a URI do Redis
- Verificar firewall/rede
- Testar com `redis-cli ping`

#### Erro de Email
```
smtplib.SMTPAuthenticationError: Authentication failed
```
**Soluções**:
- Verificar credenciais de email
- Para Gmail: usar senhas de aplicativo
- Verificar configurações TLS/SSL
- Testar com cliente de email

#### Variável de Ambiente Não Encontrada
```
KeyError: 'VARIABLE_NAME'
```
**Soluções**:
- Verificar se o arquivo `.env` existe
- Confirmar se a variável está no arquivo
- Reiniciar a aplicação após mudanças
- Verificar sintaxe do arquivo `.env`

---

## 📚 Referências

- [Documentação do Quart](https://quart.palletsprojects.com/)
- [Configuração do PostgreSQL](https://www.postgresql.org/docs/)
- [Configuração do Redis](https://redis.io/documentation)
- [Celery Configuration](https://docs.celeryproject.org/en/stable/userguide/configuration.html)
- [Flask-Mail Configuration](https://flask-mail.readthedocs.io/)

---

## 📞 Suporte

Se você encontrar problemas com a configuração:

1. Verifique este documento primeiro
2. Consulte a seção de troubleshooting
3. Abra uma issue no repositório
4. Entre em contato: contato@robotz.dev

---

*Mantenha suas credenciais seguras e nunca as compartilhe em repositórios públicos!*