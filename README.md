# Node.js + Express + PostgreSQL REST API

A simple and clean RESTful API built using **Node.js**, **Express.js**, and **PostgreSQL** that performs full **CRUD operations** on a `users` table.

## 🚀 Features

- ✅ Create a user
- 📖 Read all users / single user
- 🔄 Update user data
- ❌ Delete a user
- 🔒 Uses parameterized queries to prevent SQL injection
- 🌐 Built with RESTful principles

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [pg](https://node-postgres.com/) (PostgreSQL client)
- [dotenv](https://www.npmjs.com/package/dotenv)

## 📁 Project Structure


rest-mvc-api/
│
├── controllers/
│ └── userController.js
├── models/
│ └── userModel.js
├── routes/
│ └── userRoutes.js
├── db/
│ └── index.js # PostgreSQL connection setup
├── index.js # Main Express app
├── .env # Environment variables
└── README.md # This file


## 📦 Setup Instructions


```bash
git clone https://github.com/Amos-developer/your-repo-name.git
cd your-repo-name


### 2. Install Dependencies
npm install

### 3. Setup PostgreSQL Database
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(100) UNIQUE,
  phone VARCHAR(15),
  password TEXT
);

### 4. Configure Environment Variables
Create a .env file in the root directory:
DB_USER=your_postgres_user
DB_HOST=localhost
DB_NAME=your_database_name
DB_PASSWORD=your_postgres_password
DB_PORT=5432 (default)
PORT=your_port

### 5. Start the Server
npm run dev   # if using nodemon
# or
node index.js


🧪 Testing
You can test the API using:

>>>> Postman >>>>

🧑‍💻 Author
Your Amos Nyoni
GitHub https://github.com/Amos-developer



