# 💼 EazyPayouts Dashboard (Assignment 1)

This project is a **responsive EazyPayouts Dashboard mockup** built using **HTML, CSS, and JavaScript**.  
It demonstrates dynamic data rendering from an API-like JSON file and updates based on company and account selections.

---

## 🚀 Features

✅ Clean UI inspired by the given Figma design  
✅ Company and Account dropdowns (dynamic)  
✅ Displays account details and transaction data  
✅ Data fetched from `db.json` (no hardcoding)  
✅ Responsive layout (desktop + mobile)  
✅ Works directly in VS Code using Live Server  

---

## 🧰 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Page structure |
| **CSS3** | Styling and responsiveness |
| **JavaScript (ES6)** | Dynamic DOM manipulation and API data loading |
| **JSON (db.json)** | Simulated backend data |

---

## 📂 Folder Structure

Assignment-1/
│
├── index.html → Main dashboard page
├── style.css → Styles for layout and components
├── script.js → Core JavaScript logic (fetch, dropdowns, dynamic content)
├── db.json → Mock API data (companies, accounts, transactions)
└── README.md → Documentation

## 🧑‍💻 How to Run the Project

### ✅ Option 1 — Run Normally in VS Code (Recommended)
1. Open **VS Code**.  
2. Open the folder:  
   Assignment-1/
   3. Right-click on **`index.html`** → select **“Open with Live Server”**.  
4. It will open automatically in your browser.  
5. Choose a **Company** and then select an **Account** — data will update dynamically.

> 💡 If you don’t have Live Server, install it from VS Code Extensions (Ritwick Dey’s *Live Server*).

---

### 🖥️ Option 2 — Without Live Server
1. Open the folder.  
2. Double-click **`index.html`** to open it in your browser.  
3. The dashboard will load, but dynamic fetch from JSON might not work (some browsers block local file fetch).  
- In that case, use Live Server.

---

## 🧠 How It Works
- On page load, the app fetches data from `db.json`.  
- The **Company dropdown** is populated dynamically.  
- When a company is selected, the **Accounts dropdown** updates automatically.  
- Selecting an account updates:
- Account holder’s name  
- Account number  
- Available balance  
- Transaction list  

---

