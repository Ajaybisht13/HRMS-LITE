# HRMS Lite – Frontend

## Overview

This is the frontend application for **HRMS Lite**, a lightweight Human Resource Management System.
The frontend provides an interface for managing employee records and tracking employee attendance.

It communicates with the backend REST API built using **FastAPI**.

---

# Live Application

Frontend (GitHub Pages)

https://ajaybisht13.github.io/HRMS-LITE/

Backend API

https://hrms-lite-backend-rjyw.onrender.com/api/

---

# Tech Stack

* React
* React Router
* Axios
* Vite
* CSS

---

# Features

## Employee Management

The admin can:

* Add new employees
* View list of employees
* Delete employees

Employee fields:

* Employee ID
* Full Name
* Email
* Department

---

## Attendance Management

The admin can:

* Mark attendance for employees
* View attendance records by employee
* Prevent duplicate attendance entries for the same date

Attendance fields:

* Employee ID
* Date
* Status (Present / Absent)

---

# Project Structure

```
src
│
├── components
│   └── Navbar.jsx
│
├── pages
│   ├── Employees.jsx
│   └── Attendance.jsx
│
├── helpers
│   └── Services
│       └── employeeList.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

# Running the Project Locally

## 1. Clone the repository

```
git clone https://github.com/Ajaybisht13/HRMS-LITE.git
```

Navigate to frontend folder

```
cd HRMS-LITE/frontend
```

---

## 2. Install dependencies

```
npm install
```

---

## 3. Start development server

```
npm run dev
```

Frontend will run at

```
http://localhost:5173
```

---

# API Configuration

The frontend communicates with the backend using REST APIs.

Example API endpoint:

```
GET /api/employees
POST /api/employees
POST /api/add_attendance
```

Production API base URL:

```
https://hrms-lite-backend-rjw.onrender.com/api
```

---

# Deployment

The frontend is deployed using **GitHub Pages**.

Deployment command:

```
npm run build
```

Then the build files are deployed to GitHub Pages.

Live URL

```
https://ajaybisht13.github.io/HRMS-LITE/
```

---

# Limitations

* No authentication implemented
* No employee edit functionality
* No pagination for employee list
* Basic UI without advanced analytics

---

# Author

Ajay Bisht
