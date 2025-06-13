
# 📋 Projeto: API CRUD Node + React + PostgreSQL + OpenWeather API 🌤️

## Descrição

Este projeto é uma aplicação Full Stack simples que permite o **cadastro**, **listagem**, **edição**, **exclusão** e a **consulta do clima atual** dos clientes usando a **API OpenWeather**.

---

## 📌 Tecnologias usadas:

- **Backend:** Node.js + Express + PostgreSQL
- **Frontend:** React + Bootstrap + JQuery
- **Banco de Dados:** PostgreSQL
- **API Externa:** OpenWeather API (para buscar o clima por cidade)

---

## ⚙️ Funcionalidades:

✅ Cadastrar Cliente (Nome, Cidade, Email)  
✅ Listar todos os clientes  
✅ Editar clientes existentes  
✅ Excluir clientes  
✅ Consultar o clima atual da cidade de cada cliente  

---

## ▶️ Como executar o projeto localmente:

### 1. Configure o Banco de Dados (PostgreSQL):

Crie um banco chamado `clientesdb`, com a seguinte tabela:

```sql
CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  cidade TEXT NOT NULL,
  email TEXT
);
```

### 2. No Backend (pasta `/backend`):

```bash
cd backend
npm install
node server.js
```

*(Obs: Se quiser evitar restart manual, use o `nodemon`.)*

### 3. No Frontend (pasta `/frontend`):

```bash
cd frontend
npm install
npm start
```

### 4. Configurar sua API KEY do OpenWeather:

No backend, adicione sua chave diretamente no código onde o axios faz a chamada da API de clima:

```javascript
const apiKey = 'SUA_API_KEY_AQUI';
```

---

## 🖥️ Demonstração:

*Adicione aqui um print da tela se desejar*

---

## 👨‍💻 Autor

Desenvolvido por **Lúcio Costa**  
GitHub: [https://github.com/luciohc](https://github.com/luciohc)
