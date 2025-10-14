## Node.js Express Notes API

Навчальний проєкт з **Node.js** і **Express.js** для роботи з нотатками.

---

## ⚙️ Функціональність
- REST API для нотаток  
- Логування через `pino-http`  
- Підтримка `CORS`  
- Використання `.env`  
- Обробка помилок (404, 500)

---

## 📡 Маршрути
- **GET** `/notes` — усі нотатки  
- **GET** `/notes/:noteId` — нотатка за ID  
- **GET** `/test-error` — тест помилки

---

## Структура

nodejs-hw/
├── src/
│   └── server.js         # Основний файл сервера
├── .env                  # Змінні оточення
├── .gitignore            # Git ignore файл
├── .prettierrc           # Конфігурація Prettier
├── eslint.config.mjs     # Конфігурація ESLint
├── package.json          # Залежності та скрипти
└── README.md             # Документація

