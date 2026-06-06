# 🏥 AI Disease Predictor

An AI-powered web application that predicts possible diseases based on symptoms entered by users. The project combines a modern React.js frontend with a FastAPI backend to provide an interactive and user-friendly healthcare prediction platform.

## 📌 Project Overview

The AI Disease Predictor helps users identify potential diseases based on selected symptoms. The system analyzes symptoms and returns the most likely disease along with confidence scores and relevant information.

**Disclaimer:** This application is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional.

---

## 🚀 Features

### Frontend (React.js)

* Modern and responsive user interface
* Symptom selection and disease prediction
* User Registration and Login
* Prediction History Management
* Responsive design for desktop and mobile devices
* Professional medical-themed UI
* Local Storage Integration

### Backend (FastAPI)

* RESTful API development
* Disease prediction endpoint
* User authentication
* CORS support
* SQLite database integration
* JWT-based authentication

### Additional Features

* Prediction confidence score
* Disease information display
* Prediction history tracking
* Test case validation
* GitHub project documentation

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Tailwind CSS
* React Icons

### Backend

* FastAPI
* Python
* SQLAlchemy
* SQLite
* Passlib (Password Hashing)
* JWT Authentication

### Development Tools

* VS Code
* Git & GitHub
* Postman
* Swagger UI

---

## 📂 Project Structure

AI-Disease-Predictor/

├── frontend/

│ ├── src/

│ ├── public/

│ ├── package.json

│ └── vite.config.js

│

├── backend/

│ ├── app/

│ ├── tests/

│ ├── requirements.txt

│ └── disease.db

│

├── Vedios/

│ ├── FrontEnd - Visual.mp4

│ ├── backend - Visual.mp4

│ └── Test_Case.mp4

│

├── README.md

└── .gitignore

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/niteshpal-25/ai-disease-predictor.git
cd ai-disease-predictor
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

### Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs at:

```text
http://localhost:8000
```

Swagger Documentation:

```text
http://localhost:8000/docs
```

---

## 🔐 Authentication

The system supports:

* User Registration
* User Login
* JWT Token Authentication
* Protected Routes
* Logout Functionality

---

## 🤖 Disease Prediction Process

1. User selects symptoms.
2. Symptoms are sent to the FastAPI backend.
3. Prediction engine processes symptom data.
4. Disease prediction result is returned.
5. Confidence score is displayed.
6. Prediction history is stored.

---

## 🧪 Testing

API testing can be performed using:

* Swagger UI
* Postman
* Pytest

Run automated tests:

```bash
pytest -v
```

---

## 🎥 Project Demonstration Videos

### Frontend Demo

https://github.com/niteshpal-25/ai-disease-predictor/blob/master/Vedios/FrontEnd%20-%20Visual.mp4

### Backend Demo

https://github.com/niteshpal-25/ai-disease-predictor/blob/master/Vedios/backend%20-%20Visual.mp4

### Test Case Demo

https://github.com/niteshpal-25/ai-disease-predictor/blob/master/Vedios/Test_Case.mp4

---

## 📈 Future Enhancements

* Machine Learning Model Integration
* Random Forest Disease Prediction
* Medical Image Analysis
* Voice-Based Symptom Input
* Multi-language Support
* Nearby Hospital Recommendations
* PDF Report Generation
* AI Chat Assistant

---

## 👨‍💻 Author

**Nitesh Pal**

AI Disease Predictor Project

React.js | FastAPI | Python | SQLAlchemy | SQLite

## Project Videos

## 🎥 Project Demonstration Videos

### Frontend Demo

🔗 [Frontend Demo Video](https://github.com/niteshpal-25/ai-disease-predictor/blob/master/Vedios/FrontEnd%20-%20Visual.mp4)

### Backend Demo

🔗 [Backend Demo Video](https://github.com/niteshpal-25/ai-disease-predictor/blob/master/Vedios/backend%20-%20Visual.mp4)

### Test Case Demo

🔗 [Test Case Demo Video](https://github.com/niteshpal-25/ai-disease-predictor/blob/master/Vedios/Test_Case.mp4)
