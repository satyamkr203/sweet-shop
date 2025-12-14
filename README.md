# Sweet Shop Management System

A full-stack **Sweet Shop Management System** built as part of a **TDD Kata assignment**, demonstrating clean backend architecture, role-based access control, inventory management, and a modern React frontend.

---

## 📌 Features Overview

### 👤 Authentication & Authorization

* User registration & login
* JWT-based authentication
* Role-based access control (**USER / ADMIN**)

### 🍭 Sweet Management

* View all available sweets
* Search sweets by name, category, or price
* Admin can add, update, and delete sweets

### 📦 Inventory Management

* Users can purchase sweets (quantity decreases)
* Admin can restock sweets
* Purchase disabled when stock is zero

### 🖥 Frontend

* Built with **React + Vite**
* Clean UI using **Tailwind CSS**
* Separate dashboards for User and Admin
* Dark mode toggle (bonus)

### 🧪 Testing

* Jest + Supertest for backend API testing
* Auth APIs tested (register & login)

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* Zod (validation)
* JWT (authentication)
* Jest + Supertest (testing)

### Frontend

* React (Vite)
* JSX
* Tailwind CSS (modern Vite plugin)
* React Router

---

## 📂 Project Structure

```
sweet-shop/
├─ backend/
│  ├─ prisma/
│  │  └─ schema.prisma
│  ├─ src/
│  │  ├─ app.js
│  │  ├─ index.js
│  │  ├─ config/db.js
│  │  ├─ routes/
│  │  │  ├─ auth.js
│  │  │  ├─ sweets.js
│  │  │  └─ inventory.js
│  │  ├─ controllers/
│  │  │  ├─ authController.js
│  │  │  ├─ sweetsController.js
│  │  │  └─ inventoryController.js
│  │  ├─ middleware/
│  │  │  ├─ authMiddleware.js
│  │  │  └─ errorHandler.js
│  │  ├─ validators/
│  │  │  ├─ authValidator.js
│  │  │  └─ sweetValidator.js
│  │  ├─ utils/jwt.js
│  │  └─ tests/auth.test.js
│  ├─ jest.config.js
│  └─ package.json
│
└─ frontend/
   ├─ src/
   │  ├─ App.jsx
   │  ├─ main.jsx
   │  ├─ pages/
   │  │  ├─ Login.jsx
   │  │  ├─ Register.jsx
   │  │  ├─ Dashboard.jsx
   │  │  └─ AdminDashboard.jsx
   │  ├─ components/
   │  │  ├─ Navbar.jsx
   │  │  ├─ SweetCard.jsx
   │  │  ├─ ProtectedRoute.jsx
   │  │  └─ AdminRoute.jsx
   │  ├─ context/AuthContext.jsx
   │  ├─ api/
   │  │  └─ sweets.api.js
   │  └─ utils/theme.js
   └─ package.json
```

---

## 🔑 API Endpoints

### Auth

```
POST /api/auth/register
POST /api/auth/login
```

### Sweets

```
GET    /api/sweets
GET    /api/sweets/search
POST   /api/sweets            (ADMIN)
PUT    /api/sweets/:id        (ADMIN)
DELETE /api/sweets/:id        (ADMIN)
```

### Inventory

```
POST /api/sweets/:id/purchase (Authenticated)
POST /api/sweets/:id/restock  (ADMIN)
```

---

## ⚙️ Environment Variables

### Backend `.env`

```env
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/sweetshop
JWT_SECRET=your_secret_key
PORT=4000
```

---

## 🚀 Running the Project Locally

### 1️⃣ Backend Setup

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

Backend runs on:

```
http://localhost:4000
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🧪 Running Tests

Backend tests use **Jest + Supertest**.

```bash
cd backend
npm test
```

### Covered Tests

* User registration
* User login

---



## 📸 Screenshots

> (Add screenshots of)

* Login page
* User dashboard
* Admin dashboard
* Add / Restock sweet
* Dark mode UI

---
## 🧠 My AI Usage

I used AI tools (ChatGPT) as a debugging and development assistant during the implementation of this project.

### How AI was used:
- Debugging backend issues related to JWT authentication, role-based access control, and Prisma schema errors
- Resolving Jest configuration issues for ES Modules
- Debugging and validating Admin vs User routing logic in the frontend
- Assisting in structuring protected routes for AdminDashboard and User Dashboard
- Troubleshooting UI behavior such as conditional rendering based on user roles
Reflection:
AI helped speed up debugging and reduce configuration friction, especially in areas like authentication flow, role propagation between backend and frontend, and frontend routing logic. All AI-suggested solutions were reviewed, understood, and adapted before being applied.
---


## 👤 Author

**Satyam Kumar**
Full-Stack Developer
GitHub: [https://github.com/satyamkr203](https://github.com/satyamkr203)

---
