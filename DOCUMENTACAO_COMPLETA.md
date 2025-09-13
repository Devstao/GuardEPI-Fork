# 📋 GuardEPI - Documentação Completa do Sistema

## 🔍 Visão Geral

O **GuardEPI** é um sistema completo de gerenciamento de Equipamentos de Proteção Individual (EPI) desenvolvido para empresas que precisam controlar rigorosamente a distribuição, uso e controle de estoque de EPIs para seus funcionários.

## 🏗️ Arquitetura do Sistema

### Tecnologias Principais

- **Backend**: Python 3.13+ com Quart (framework assíncrono baseado no Flask)
- **Banco de Dados**: PostgreSQL com SQLAlchemy ORM
- **Cache e Broker**: Redis
- **Processamento Assíncrono**: Celery
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
- **Autenticação**: Quart-Auth com JWT
- **Comunicação em Tempo Real**: WebSockets via Quart-SocketIO
- **Containerização**: Docker com Docker Compose

### Principais Componentes

1. **Aplicação Web Assíncrona** - Interface principal do sistema
2. **Worker Celery** - Processamento de tarefas em background
3. **Scheduler Celery Beat** - Tarefas agendadas (notificações)
4. **Banco PostgreSQL** - Armazenamento de dados principais
5. **Cache Redis** - Sessões e cache de dados
6. **Sistema de Email** - Notificações automáticas

## 🎯 Funcionalidades Principais

### 1. 📦 Gestão de Estoque de EPI

#### 1.1 Controle de Entrada de Estoque
- **Registro de Novas Entradas**: Cadastro de novos lotes de EPIs
- **Controle de Lotes**: Rastreamento por data de fabricação e validade
- **Documentação**: Upload e gestão de notas fiscais e certificados
- **Integração com Fornecedores**: Vinculação automática com dados do fornecedor

#### 1.2 Controle de Saída de Estoque
- **Cautelas Individuais**: Registro de EPIs entregues a funcionários específicos
- **Cautelas em Lote**: Distribuição para grupos ou setores
- **Controle de Devolução**: Registro de EPIs devolvidos
- **Histórico Completo**: Rastreabilidade total de movimentações

#### 1.3 Inventário e Relatórios
- **Estoque Atual**: Visualização em tempo real do estoque disponível
- **Controle por Grade**: Gestão de tamanhos (PP, P, M, G, GG, etc.)
- **Alertas de Estoque Baixo**: Notificações automáticas
- **Relatórios Gerenciais**: Dashboards com métricas de consumo

### 2. 👥 Gestão de Funcionários

#### 2.1 Cadastro e Perfil
- **Dados Pessoais**: Informações completas do funcionário
- **Dados Profissionais**: Cargo, setor, centro de custo
- **Documentos**: CPF, RG, PIS, documentos digitalizados
- **Fotos**: Sistema de upload e gestão de fotos

#### 2.2 Controle Admissional
- **Formulários Dinâmicos**: Cadastro com validações automáticas
- **Integração com RH**: Sincronização com sistemas de RH
- **Documentação Digital**: Armazenamento seguro de documentos
- **Histórico Profissional**: Registro de mudanças de cargo/setor

#### 2.3 Gestão de EPIs por Funcionário
- **EPIs Ativos**: Lista de equipamentos em uso pelo funcionário
- **Histórico de Uso**: Registro completo de EPIs já utilizados
- **Calendário de Troca**: Agendamento automático de substituições
- **Notificações Personalizadas**: Alertas específicos por funcionário

### 3. 🛡️ Catálogo de EPIs

#### 3.1 Categorias de Equipamentos
- **Proteção da Cabeça**: Capacetes, bonés, capuzes
- **Proteção dos Olhos**: Óculos de segurança, viseiras
- **Proteção Auditiva**: Abafadores, protetores auriculares
- **Proteção Respiratória**: Máscaras, respiradores
- **Proteção das Mãos**: Luvas de diversos materiais
- **Proteção dos Pés**: Botas, sapatos de segurança
- **Proteção do Corpo**: Aventais, macacões, coletes

#### 3.2 Gestão de Marcas e Modelos
- **Cadastro de Marcas**: Fabricantes e distribuidores
- **Modelos de EPIs**: Especificações técnicas detalhadas
- **Certificações**: Controle de CAs (Certificados de Aprovação)
- **Grades de Tamanhos**: Configuração flexível de tamanhos

#### 3.3 Gestão de Fornecedores
- **Dados Empresariais**: CNPJ, razão social, contatos
- **Histórico de Compras**: Registro de todas as aquisições
- **Avaliação de Fornecedores**: Sistema de notas e comentários
- **Contratos e Acordos**: Gestão de documentos contratuais

### 4. 📋 Sistema de Cautelas

#### 4.1 Emissão de Cautelas
- **Interface Intuitiva**: Formulários dinâmicos para emissão
- **Validações Automáticas**: Verificação de disponibilidade e adequação
- **Assinatura Digital**: Sistema de assinatura eletrônica
- **Impressão de Recibos**: Geração automática de comprovantes

#### 4.2 Controle de Validade
- **Alertas de Vencimento**: Notificações automáticas antes do vencimento
- **Calendário de Trocas**: Agendamento automático de substituições
- **Histórico de Trocas**: Registro completo de substituições
- **Relatórios de Conformidade**: Controle regulatório automático

#### 4.3 Devoluções e Substituições
- **Processo de Devolução**: Workflow para retorno de EPIs
- **Análise de Estado**: Avaliação da condição do EPI devolvido
- **Substituição Automática**: Emissão automática de novos EPIs
- **Controle de Custos**: Gestão financeira das movimentações

### 5. 🔔 Sistema de Notificações

#### 5.1 Notificações Automáticas
- **Email**: Alertas por email para funcionários e gestores
- **Sistema Interno**: Notificações na plataforma
- **WhatsApp** (opcional): Integração com API do WhatsApp
- **SMS** (opcional): Envio de mensagens de texto

#### 5.2 Tipos de Alertas
- **Vencimento de EPIs**: Alertas antes do vencimento
- **Estoque Baixo**: Notificações para o setor de compras
- **Não Conformidades**: Alertas de irregularidades
- **Renovação de CAs**: Avisos sobre certificações vencendo

### 6. 🏢 Gestão Corporativa

#### 6.1 Multi-empresa
- **Empresas Múltiplas**: Gestão centralizada de várias empresas
- **Centros de Custo**: Controle por departamentos ou projetos
- **Hierarquia Organizacional**: Estrutura flexível de organização
- **Relatórios Consolidados**: Visão integrada de todas as unidades

#### 6.2 Controle de Acesso
- **Perfis de Usuário**: Administrador, Gestor, Operador, Consulta
- **Permissões Granulares**: Controle detalhado de acessos
- **Autenticação Segura**: Login com JWT e sessões seguras
- **Auditoria**: Log completo de todas as ações do sistema

### 7. 📊 Dashboard e Relatórios

#### 7.1 Dashboard Executivo
- **Métricas em Tempo Real**: KPIs principais do sistema
- **Gráficos Interativos**: Visualizações dinâmicas de dados
- **Alertas Consolidados**: Resumo de todas as notificações
- **Tendências**: Análise de padrões de consumo

#### 7.2 Relatórios Gerenciais
- **Consumo por Setor**: Análise de uso por departamento
- **Custos de EPIs**: Controle financeiro detalhado
- **Eficácia do Programa**: Métricas de compliance
- **Relatórios Regulatórios**: Documentos para órgãos fiscalizadores

### 8. 🔐 Segurança e Compliance

#### 8.1 Segurança de Dados
- **Criptografia**: Dados sensíveis criptografados
- **Backup Automático**: Rotinas de backup regulares
- **Controle de Acesso**: Autenticação e autorização robustas
- **Auditoria Completa**: Log de todas as operações

#### 8.2 Compliance Regulatório
- **NR-6**: Atendimento completo à Norma Regulamentadora
- **Certificações**: Controle de CAs e validades
- **Documentação**: Gestão de documentos obrigatórios
- **Relatórios Oficiais**: Documentos para fiscalizações

## 🚀 Arquitetura Técnica

### Estrutura de Diretórios

```
app/
├── __init__.py              # Configuração principal da aplicação
├── __main__.py              # Ponto de entrada da aplicação
├── config.py                # Configurações de ambiente
├── decorators/              # Decoradores customizados
├── forms/                   # Formulários WTForms
├── logs/                    # Sistema de logging
├── misc/                    # Utilitários diversos
├── models/                  # Modelos SQLAlchemy
│   ├── EPI/                # Modelos relacionados a EPIs
│   ├── Funcionários.py     # Modelo de funcionários
│   ├── admissional/        # Modelos admissionais
│   └── users.py           # Modelo de usuários
├── routes/                  # Rotas da aplicação
│   ├── auth/              # Rotas de autenticação
│   ├── config/            # Rotas de configuração
│   ├── corporativo/       # Rotas corporativas
│   ├── dashboard/         # Dashboard principal
│   ├── epi/               # Rotas de gestão de EPIs
│   ├── funcionarios/      # Rotas de gestão de funcionários
│   └── schedule_task/     # Tarefas agendadas
├── static/                # Arquivos estáticos (CSS, JS, imagens)
└── templates/             # Templates HTML Jinja2
```

### Fluxo de Dados

1. **Requisição HTTP** → Quart Application
2. **Autenticação** → Quart-Auth + JWT
3. **Roteamento** → Blueprint específico
4. **Validação** → WTForms
5. **Processamento** → Business Logic
6. **Banco de Dados** → SQLAlchemy ORM
7. **Cache** → Redis (se necessário)
8. **Resposta** → Template Jinja2 + JSON/HTML

### Processamento Assíncrono

```
Celery Worker → Redis Broker → Background Tasks:
├── Envio de emails
├── Geração de relatórios
├── Processamento de uploads
├── Sincronização de dados
└── Notificações automáticas
```

## 📱 Interface do Usuário

### Design Responsivo
- **Bootstrap 5**: Framework CSS moderno
- **Mobile First**: Otimizado para dispositivos móveis
- **PWA Ready**: Preparado para Progressive Web App
- **Acessibilidade**: Seguindo padrões WCAG

### Componentes Principais
- **Dashboards Interativos**: Gráficos e métricas em tempo real
- **Formulários Dinâmicos**: Validação client-side e server-side
- **Tabelas Avançadas**: DataTables com filtros e ordenação
- **Modais e Popups**: Interface não intrusiva
- **Notificações Toast**: Feedback imediato para o usuário

## 🔧 Configuração e Manutenção

### Configurações de Sistema
- **Parâmetros Gerais**: Configurações básicas do sistema
- **Notificações**: Configuração de alertas e emails
- **Integrações**: APIs externas e webhooks
- **Backup**: Configurações de backup automático

### Manutenção Preventiva
- **Limpeza de Logs**: Rotinas automáticas de limpeza
- **Otimização de BD**: Scripts de manutenção do banco
- **Monitoramento**: Métricas de performance e saúde
- **Atualizações**: Sistema de versionamento e updates

## 📈 Escalabilidade

### Horizontal Scaling
- **Load Balancer**: Distribuição de carga entre instâncias
- **Multi-container**: Separação de responsabilidades
- **CDN**: Distribuição de conteúdo estático
- **Database Sharding**: Particionamento de dados

### Performance
- **Cache Redis**: Cache de consultas frequentes
- **Async Processing**: Operações não bloqueantes
- **Connection Pooling**: Otimização de conexões de BD
- **Lazy Loading**: Carregamento sob demanda

## 🎯 Casos de Uso Típicos

### 1. Admissão de Novo Funcionário
1. Cadastro no sistema de funcionários
2. Definição de EPIs necessários pelo cargo
3. Emissão automática de cautelas
4. Agendamento de entregas
5. Assinatura digital de recebimento

### 2. Renovação de EPI Vencido
1. Sistema detecta EPI próximo do vencimento
2. Envia notificação automática
3. Agenda substituição
4. Registra devolução do EPI vencido
5. Emite nova cautela automaticamente

### 3. Controle de Estoque
1. Entrada de nova remessa
2. Atualização automática do estoque
3. Distribuição inteligente por demanda
4. Alertas de estoque mínimo
5. Geração de pedidos de compra

## 🔄 Integrações

### APIs Disponíveis
- **REST API**: Endpoints completos para integração
- **WebHooks**: Notificações automáticas para sistemas externos
- **Export/Import**: Integração com planilhas e sistemas ERP
- **SSO**: Single Sign-On com sistemas corporativos

### Sistemas Externos
- **ERP**: Integração com sistemas de gestão empresarial
- **RH**: Sincronização com sistemas de recursos humanos
- **E-commerce**: Integração com lojas virtuais para compras
- **Financeiro**: Integração com sistemas de controle financeiro

## 🛠️ Suporte e Manutenção

### Níveis de Suporte
- **Básico**: Documentação e FAQ
- **Intermediário**: Suporte por email
- **Avançado**: Suporte telefônico e remoto
- **Premium**: Suporte 24/7 e SLA garantido

### Treinamento
- **Usuários Finais**: Treinamento para operação básica
- **Administradores**: Treinamento técnico avançado
- **Desenvolvedores**: Workshop de integração e APIs
- **Gestores**: Treinamento em relatórios e métricas

---

## 📞 Contato

Para mais informações sobre o GuardEPI:
- **Email**: contato@robotz.dev
- **Website**: https://guardepi.com.br
- **Documentação Técnica**: Este repositório
- **Suporte**: Abra uma issue neste repositório

---

*Esta documentação está em constante evolução. Contribuições são bem-vindas!*