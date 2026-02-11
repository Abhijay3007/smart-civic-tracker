# 🏙️ Smart Civic Tracker

A full-stack MERN application that enables citizens to report civic issues and allows administrators to manage and resolve them efficiently.

🔗 **Live Frontend:** https://your-netlify-link.netlify.app  
🔗 **Backend API:** https://smart-civic-tracker-3.onrender.com  

---

## 🚀 Project Overview

Smart Civic Tracker is a role-based civic issue reporting system built using the MERN stack.  
Users can report problems such as road damage, garbage overflow, water leakage, etc., while administrators can monitor, update, and manage all submitted reports.

The application demonstrates:

- JWT Authentication
- Role-Based Access Control (RBAC)
- Protected API routes
- Production deployment workflow
- Cloud database integration
- Clean folder structure and modular backend design

---

## ✨ Features

### 👤 User Features
- Register & Login securely using JWT
- Report civic issues with title, description, and category
- Optional location coordinates with Google Maps preview
- View only their own submitted issues
- Track issue progress using a visual status timeline

### 🛠️ Admin Features
- View all reported issues
- Update issue status:
  - Pending
  - In Progress
  - Resolved
- Delete irrelevant or duplicate issues
- Access restricted routes using role-based middleware

---

## 🧰 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router
- Context API (Authentication State Management)

### Backend
- Node.js
- Express.js
- MongoDB Atlas (Cloud Database)
- Mongoose
- JWT (JSON Web Tokens)
- Role-Based Authorization Middleware

### Deployment
- Frontend → Netlify
- Backend → Render
- Database → MongoDB Atlas

---


### Backend Design Pattern
- MVC Structure (Models, Routes, Controllers)
- Centralized middleware for authentication
- Role-based route protection
- Environment variable configuration
- Separation of `app.js` and `server.js`

---

## 📁 Folder Structure


### Backend Design Pattern
- MVC Structure (Models, Routes, Controllers)
- Centralized middleware for authentication
- Role-based route protection
- Environment variable configuration
- Separation of `app.js` and `server.js`

---

## 📁 Folder Structure

smart-civic-tracker/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── context/
│ │ ├── services/
│ │ └── App.jsx
│ └── package.json
│
├── server/ # Express Backend
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middlewares/
│ ├── config/
│ ├── app.js
│ └── server.js
│
└── README.md


⚠️ The `.env` file is ignored via `.gitignore` and never pushed to GitHub.

For production, environment variables are configured directly in Render.

---

## ⚙️ Installation Guide (Local Setup)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Abhijay3007/smart-civic-tracker.git
cd smart-civic-tracker


2️⃣ Backend Setup :

cd server
npm install
npm run dev

Server runs on: http://localhost:5000

3️⃣ Frontend Setup :

cd client
npm install
npm run dev

Frontend runs on: http://localhost:5173

🌍 Deployment Details
Backend (Render):

1) Root Directory: server

2) Build Command: npm install

3) Start Command: npm start

4) Environment variables configured in dashboard

Frontend (Netlify):

1) Build Command: npm run build

2) Publish Directory: dist

3) Redirect rule added to support React Router

🔑 Key Implementation Highlights

• Implemented JWT-based authentication with secure login and registration flows
• Built role-based access control (RBAC) to restrict admin-only and user-only routes
• Designed protected REST APIs using Express middleware for authorization
• Followed MVC architecture with clear separation of models, controllers, and routes
• Integrated MongoDB Atlas as a cloud database using Mongoose ODM
• Enabled users to report civic issues with category, description, and optional geolocation
• Added Google Maps preview for location-based issue visualization
• Developed admin functionality to view, update issue status, and delete unnecessary reports
• Implemented visual status timeline to track issue progress
• Configured Axios with interceptors for automatic JWT token attachment
• Handled optional location validation to prevent frontend map rendering errors
• Ensured secure handling of environment variables using .env and deployment platform settings
• Built responsive and user-friendly UI using Tailwind CSS
• Deployed frontend on Netlify and backend on Render with production-ready configuration

📘 Lessons Learned

• Learned the difference between local MongoDB and cloud-based MongoDB Atlas
• Understood the importance of environment variables in production deployment
• Gained experience debugging 401 vs 404 API errors in deployed applications
• Learned how to securely manage secrets and prevent accidental exposure in GitHub
• Handled CORS configuration issues between frontend and backend deployments
• Improved understanding of JWT lifecycle and token-based authentication
• Learned to resolve Git rebase and merge conflicts safely
• Gained hands-on experience with full-stack deployment workflows
• Understood case-sensitivity issues in Linux-based production environments
• Learned how frontend API base URLs must match backend route structures
• Improved debugging skills using browser DevTools and backend logs
• Gained confidence deploying and maintaining a real-world MERN application
