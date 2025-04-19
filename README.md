# 📊 WhatsApp Chat Analysis Tool

This project provides a web-based tool to analyze WhatsApp chats using powerful visualizations and statistics. It's built with a **Node.js backend** and a **React.js frontend**.

---

## 📁 Project Structure

```
whatsapp-analysis-web/
📄 README.md
├── backend/       # Node.js Express API
└── frontend/      # React.js frontend (with charts and stats)
```

---

## 🚀 How to Run the Project Locally

### ✅ Prerequisites

- Node.js (v16 or above recommended)
- npm (comes with Node.js)
- Git (optional but recommended)

---

## 🧠 Backend Setup (Node.js API)

**Path**: `whatsapp-analysis-web/backend`

### Steps:

```bash
cd whatsapp-analysis-web/backend
npm install
npm run dev
```

By default, this runs the backend server at:  
👉 `http://localhost:5005`

---

## 💻 Frontend Setup (React App)

**Path**: `whatsapp-analysis-web/frontend`

### Steps:

```bash
cd whatsapp-analysis-web/frontend
npm install
npm run dev
```

By default, this runs the frontend at:  
👉 `http://localhost:5173`

---

## 🌐 Accessing the App

Once both frontend and backend are running:

- Open your browser and visit: `http://localhost:3000`
- You can upload a WhatsApp chat `.txt` file and view the generated insights!

---

## 📅 .gitignore Setup

In both `backend/` and `frontend/`, create a `.gitignore` file and include:

```
node_modules/
.env
dist/
build/
```

---

## 📦 Deployment (Free Hosting Options)

You can deploy your project using free platforms:

### 🔹 Frontend (React):
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)

### 🔹 Backend (Node.js):
- [Render](https://render.com) (Free tier supports Node.js)
- [Railway](https://railway.app)
- [Glitch](https://glitch.com)

---

## 🧪 Dev Tips

- Use `.env` for environment configs like port, API URLs, etc.
- Run `npm run build` in frontend for production-ready files.
- For CORS issues, make sure backend allows requests from frontend.

---

## 📬 Contact

For issues, suggestions, or contributions, feel free to raise an issue or PR on the repository!

---

Happy Coding! 🚀

