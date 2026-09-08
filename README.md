# 🔐 SecurePass – Web Password Manager

SecurePass is a full-stack password manager web application that allows users to securely store, manage, and access their passwords from anywhere.

Built with modern technologies and secured using Auth0 authentication and JWT-based authorization.

---

## 🚀 Features

- 🔑 Secure Authentication using Auth0
- 🛡 JWT Protected Backend APIs
- 💾 Store Passwords securely in MongoDB
- 👤 User-specific password storage
- 📋 Copy to clipboard functionality
- ✏ Edit and delete saved passwords
- 📱 Fully Responsive UI (Tailwind CSS)
- 🔄 Real-time updates after saving/deleting

---

## 🏗 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router
- Auth0 React SDK

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- express-oauth2-jwt-bearer
- dotenv

---

## 🔐 Authentication & Security

- Auth0 handles user authentication
- Access tokens are verified in backend
- JWT validation using:
  - Audience
  - Issuer
  - RS256 Signing Algorithm
- Each password is stored with:
userId: req.auth.payload.sub

- Users can only access their own saved passwords

---

## 📂 Project Structure



SecurePass/
│
├── frontend/
│ ├── src/
│ └── ...
│
├── backend/
│ ├── models/
│ ├── db/
│ └── app.js
│
└── README.md


---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
(https://github.com/saurabh0772/Secure-Pass-Web-App.git)
cd Secure-Pass-Web-App

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

MONGO_URI=your_mongodb_connection_string
PORT=3000


Run backend:

npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev



👨‍💻 Author

Saurabh Kumar
GitHub: https://github.com/saurabh0772
