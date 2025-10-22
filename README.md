# MongoDB Integration

## Мета

Розширити Express-додаток, підключивши **MongoDB** через **Mongoose**, реалізувати всі **CRUD-операції** та правильно організувати структуру коду.

---

## Критерії приймання

- Гілка **02-mongodb**
- Посилання на GitHub і Render.com
- Сервер працює без помилок
- Є підключення до MongoDB
- Змінні в `.env`: `PORT`, `MONGO_URL`
- Логування через **pino-http**
- Реалізовані маршрути:
  - `GET /notes`
  - `GET /notes/:noteId`
  - `POST /notes`
  - `PATCH /notes/:noteId`
  - `DELETE /notes/:noteId`
- Обробка 404 і глобальних помилок (500, http-errors)

---




