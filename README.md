# 💼 EazyPayouts Dashboard (Assignment 1)

📌 Project Overview

This project is a responsive web dashboard built using HTML, CSS, JavaScript, and Node.js (Express).
It displays companies and their corresponding accounts dynamically using API calls — no hardcoded data.

When a user selects a company, the dropdown for accounts updates automatically, and account details are fetched from the Node API.

## 🚀 Features

🏢 Company dropdown dynamically lists companies.

🧾 Account dropdown updates based on selected company.

📊 Account details displayed using live API calls (no hardcoding).

🎨 Clean, Figma-like UI (EazyPayouts) with proper spacing, typography, and layout.

💻 Fully responsive design across screen sizes.

🧠 Well-commented code for better understanding.

🚫 No Live Server extensions — uses Node.js API backend.  

---

## 🧰 Tech Stack

| Layer        | Technology                          |
| :----------- | :---------------------------------- |
| Frontend     | HTML5, CSS3, JavaScript (Fetch API) |
| Backend      | Node.js (Express Framework)         |
| API Support  | Express REST Endpoints              |
| Cross-Origin | CORS Enabled                        |


---

## 📂 Folder Structure

```
Assignment-1/
│
├── server.js              # Node.js backend (API server)
├── package.json           # NPM dependencies
│
├── public/
│   ├── index.html         # Frontend HTML file
│   ├── style.css          # CSS styling (UI look)
│   └── script.js          # JS for API calls & logic
│
├── assets/
│   └── logo.png           # Project logo used in the header
│
└── README.md              # Documentation
```

## 🧑‍💻 How to Run the Project

Open VS Code or any terminal.
Navigate to the project folder:
cd Assignment-1
Start the Node server:
node server.js
Open your browser and go to:
http://localhost:3000
You’ll see the EazyPayouts Dashboard UI.
Select a company → choose an account → see details appear instantly!
---

## 🧠 How It Works
On page load, the script fetches the company list from /api/companies.
When a company is selected, another API call fetches its associated accounts.
Selecting an account fetches that account’s details (balance, number, holder name) dynamically.
The entire flow uses asynchronous JavaScript (fetch) for smooth user experience.
---

