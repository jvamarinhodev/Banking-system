# Banking System (CLI) — Node.js Core Modules

Sistema bancário em linha de comando desenvolvido com foco em prática de arquitetura backend utilizando exclusivamente Node.js e seus Core Modules para persistência e controle de fluxo assíncrono.

---

## 📌 Contexto

Aplicação desenvolvida com o objetivo de praticar:

* Arquitetura modular
* Separação de responsabilidades
* Manipulação de arquivos com `fs/promises`
* Controle de fluxo assíncrono com `async/await`
* Tratamento estruturado de erros
* Organização de código em camadas

O projeto iniciou como um monólito funcional e foi posteriormente refatorado para uma estrutura desacoplada.

---

## 🏗️ Arquitetura

A aplicação segue uma divisão em camadas com responsabilidades bem definidas:

```
src/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── ui/
 └── app.js
```

### Controllers

Responsáveis por orquestrar o fluxo da aplicação, conectando UI e Services.

### Services

Contêm a regra de negócio:

* Criação de conta
* Depósito
* Saque
* Consulta de saldo

### Repositories

Responsáveis pela persistência em arquivos JSON:

* Leitura e escrita de dados
* Validação de existência de arquivos
* Resolução de caminhos com `path`

### UI

Camada de interação com o usuário via CLI.

---

## ⚙️ Persistência de Dados

A persistência é feita via arquivos `.json`, representando cada conta individualmente.

Operações utilizadas:

* `fs.access` para validação de existência do arquivo
* `fs.readFile` para leitura
* `fs.writeFile` para escrita
* `try/catch` para tratamento de exceções

Essa abordagem reforça o entendimento de I/O assíncrono antes da migração para banco de dados.

---

## 🔁 Fluxo Assíncrono

A aplicação utiliza:

* `async/await`
* Tratamento de erros com `try/catch`
* Encadeamento controlado de operações

O objetivo é garantir previsibilidade no fluxo e evitar falhas não tratadas.

---

## 🧪 Funcionalidades

* Criação de conta
* Depósito com validação de valor
* Saque com verificação de saldo
* Consulta de saldo
* Validação de conta inexistente
* Tratamento de entradas inválidas

---

## ▶️ Como Executar

```bash
git clone <https://github.com/jvamarinhodev/Banking-system>
npm install
node src/app.js
```

---

## 📈 Evolução Planejada

* Migração para API REST
* Integração com banco de dados (PostgreSQL ou MongoDB)
* Implementação de testes automatizados
* Aplicação de princípios SOLID

---

## 👨‍💻 Autor

João Vitor Amarinho de Oliveira
Backend Developer em formação
