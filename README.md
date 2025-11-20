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
```
1️⃣ Download the Project
    Go to the GitHub repository and click:
    Code → Download ZIP

2️⃣ Extract the ZIP File
    Unzip the downloaded file on your system.

3️⃣ Open the Project Folder
    Open the extracted folder in VS Code or any editor.

4️⃣ Open Terminal in the Project Directory
Make sure you are inside the root project folder (where server.js exists).

5️⃣ Install Dependencies
    Run: npm install

6️⃣ Start the Server
    Run: npm start
This will start your Node.js server.

7️⃣ Open the Dashboard
    Open your browser and go to: http://localhost:3000
```
---

## 🧠 How It Works
```
1. On page load, the script fetches the company list from /api/companies.
2. When a company is selected, another API call fetches its associated accounts.
3. Selecting an account fetches that account’s details (balance, number, holder name) dynamically.
4. The entire flow uses asynchronous JavaScript (fetch) for smooth user experience.
```
---

