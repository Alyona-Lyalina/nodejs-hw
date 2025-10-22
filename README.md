# 📝 NodeJS Notes App with MongoDB

## 👩‍💻 Про проект

Проект **Notes App** на **Node.js + Express**, підключений до **MongoDB** через **Mongoose**.

---

## 🔹 Виконано

- Підключення до MongoDB через **Mongoose** (`connectMongoDB.js`)  
- Створена модель **Note** з полями:
  - `title` — обов’язкове поле
  - `content` — необов’язкове, за замовчуванням пусте
  - `tag` — enum з 10 варіантами (default: Todo)  
- Реалізовані **CRUD-операції**:
  - `GET /notes` — повертає всі нотатки
  - `GET /notes/:noteId` — повертає нотатку за ID
  - `POST /notes` — створення нової нотатки
  - `PATCH /notes/:noteId` — оновлення нотатки
  - `DELETE /notes/:noteId` — видалення нотатки
- Підключені **middleware**:
  - `logger` — логування запитів
  - `notFoundHandler` — обробка 404
  - `errorHandler` — глобальна обробка помилок
- Використана бібліотека **http-errors** для обробки помилок 404 та 500
- Код організований у модулі:
  - `controllers/`
  - `routes/`
  - `models/`
  - `middleware/`
  - `db/`

---

## 🚀 Результат

- Сервер працює стабільно, підключення до MongoDB успішне  
- Кожен маршрут повертає коректний JSON з потрібним статусом  
- Код чистий, логічно розділений, легко підтримується

---

## 💻 Технології

- Node.js
- Express
- MongoDB + Mongoose
- http-errors
- pino-http (логування)
- cors
- dotenv

---






