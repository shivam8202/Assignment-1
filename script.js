
document.addEventListener("DOMContentLoaded", async () => {
  const companySelect = document.getElementById("companySelect");
  const accountSelect = document.getElementById("accountSelect");
  const tbody = document.querySelector("#transactionTable tbody");


  const companies = await fetch("/api/companies").then((res) => res.json());
  companies.forEach((c) => {
    const option = document.createElement("option");
    option.value = c;
    option.textContent = c;
    companySelect.appendChild(option);
  });


  companySelect.addEventListener("change", async () => {
    const company = companySelect.value;
    accountSelect.innerHTML = '<option value="">Account Name</option>';

    if (!company) return;

    const accounts = await fetch(`/api/accounts/${company}`).then((res) =>
      res.json()
    );
    accounts.forEach((a) => {
      const option = document.createElement("option");
      option.value = a;
      option.textContent = a;
      accountSelect.appendChild(option);
    });

    tbody.innerHTML = ""; 
  });


  accountSelect.addEventListener("change", async () => {
    const company = companySelect.value;
    const account = accountSelect.value;

    if (!company || !account) return;

    const transactions = await fetch(
      `/api/transactions/${company}/${account}`
    ).then((res) => res.json());

    tbody.innerHTML = "";
    transactions.forEach((t) => {
      const row = `<tr>
          <td>${t.date}</td>
          <td>${t.credit}</td>
          <td>${t.balance}</td>
          <td>${t.utr}</td>
          <td>${t.account}</td>
      </tr>`;
      tbody.innerHTML += row;
    });
  });
});
