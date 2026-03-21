# 🚀 SkillBridge – Skill Gap Analyzer

SkillBridge is a web-based application built using Django that helps users identify their skill gaps, analyze career readiness, and track their learning progress toward different career goals.

---

## 📌 Project Overview

Choosing the right career path and understanding the required skills can be difficult for students and professionals.
SkillBridge solves this by analyzing user skills against career requirements and providing actionable insights.

---

## 🎯 Key Features

* 🔐 User Authentication (Login / Signup / Logout)
* 🧠 Skill Gap Analysis
* 📊 Career Readiness Score (0–100%)
* 📈 Progress Tracking with Charts
* 🕘 Career Goal History
* 👤 Profile Dropdown Menu
* 📚 Suggested Learning Paths
* 🧭 Skill Roadmap Generation

---

## 🖥️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Django (Python)
* **Database:** SQLite
* **Charts:** Chart.js
* **UI Enhancements:** Google Fonts, Avatars API

---

## 📂 Project Structure

```
SkillAnalyzer/
│
├── SkillBuilder/
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   ├── templates/
│   │   ├── login.html
│   │   ├── home.html
│   │   ├── progress.html
│   │   └── history.html
│   └── static/
│       ├── css/
│       └── js/
│
├── manage.py
└── db.sqlite3
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/js76-designer/SkillAnalyzer.git
cd SkillAnalyzer
```

### 2️⃣ Create virtual environment

```
python -m venv venv
venv\Scripts\activate
```

### 3️⃣ Install dependencies

```
pip install django
```

### 4️⃣ Run migrations

```
python manage.py makemigrations
python manage.py migrate
```

### 5️⃣ Start server

```
python manage.py runserver
```

👉 Open in browser:

```
http://127.0.0.1:8000/
```

---

## 📊 How It Works

1. User logs in or signs up
2. Enters a career goal
3. Provides current skills
4. System compares with required skills
5. Generates:

   * Readiness Score
   * Missing Skills
   * Learning Suggestions
   * Skill Roadmap

---

## 📈 Future Enhancements

* 🌐 Integration with Career APIs
* 🤖 AI-based skill recommendations
* 📱 Mobile responsive UI improvements
* 🧑‍🤝‍🧑 Community-based learning suggestions
* 🎓 Course integration (Coursera, Udemy, etc.)

---

## ⚠️ Limitations

* Skill data is currently manually defined
* Readiness score logic is basic
* No real-time job market integration yet

---

## 👨‍💻 Author

**Mohammed Jaffer**
GitHub: https://github.com/js76-designer

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share your feedback!

---
