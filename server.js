
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));


const data = {
  "EazyPayouts Pvt Ltd": {
    "Main Account": [
      {
        date: "07/05/2024 01:04 PM",
        credit: "₹ 21,337",
        balance: "₹ 21,337",
        utr: "1000000",
        account: "AC0CF7RRUY407QHU",
      },
      {
        date: "04/05/2024 12:38 PM",
        credit: "₹ 21,337",
        balance: "₹ 21,337",
        utr: "CMS4136431811",
        account: "0104SLNEFTPL",
      },
    ],
    "Secondary Account": [
      {
        date: "28/03/2024 05:09 PM",
        credit: "₹ 5,015.69",
        balance: "₹ 5,015.69",
        utr: "CMS4019645011",
        account: "ACT861VM9RR67Z5C",
      },
      {
        date: "19/03/2024 11:33 PM",
        credit: "₹ 16,000",
        balance: "₹ 16,000",
        utr: "CMS3938564916",
        account: "AC0CF7RRUY407QHU",
      },
    ],
  },
  "PayFast Solutions": {
    "Corporate Account": [
      {
        date: "01/07/2024 10:30 AM",
        credit: "₹ 50,000",
        balance: "₹ 75,000",
        utr: "PF123456789",
        account: "PAYFAST123",
      },
      {
        date: "05/07/2024 11:00 AM",
        credit: "₹ 10,000",
        balance: "₹ 85,000",
        utr: "PF987654321",
        account: "PAYFAST987",
      },
    ],
    "Savings Account": [
      {
        date: "08/07/2024 02:15 PM",
        credit: "₹ 25,000",
        balance: "₹ 1,10,000",
        utr: "PF555888222",
        account: "PAYFAST555",
      },
    ],
  },
};


app.get("/api/companies", (req, res) => {
  res.json(Object.keys(data));
});


app.get("/api/accounts/:company", (req, res) => {
  const company = req.params.company;
  res.json(Object.keys(data[company]));
});


app.get("/api/transactions/:company/:account", (req, res) => {
  const { company, account } = req.params;
  res.json(data[company][account]);
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
