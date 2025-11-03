

const companySelect = document.getElementById('companySelect');
const accountSelect = document.getElementById('accountSelect');
const availableBalance = document.getElementById('availableBalance');
const txBody = document.getElementById('txBody');

let db = null;

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });

function formatAmount(v){
  if(typeof v !== 'number') v = Number(v) || 0;
  return inr.format(v);
}

function clearChildren(el){ while(el.firstChild) el.removeChild(el.firstChild); }

function populateCompanies(companies){
  clearChildren(companySelect);
  companies.forEach((c, idx) => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = c.name;
    companySelect.appendChild(opt);
  });
}

function populateAccounts(accounts){
  clearChildren(accountSelect);
  accounts.forEach(a => {
    const opt = document.createElement('option');
    opt.value = a.id;
    opt.textContent = a.name;
    accountSelect.appendChild(opt);
  });
}

function showBalance(account){
  availableBalance.textContent = formatAmount(account.balance);
}

function renderTransactions(list){
  clearChildren(txBody);
  if(!list || list.length === 0){
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = 5; td.className = 'muted'; td.textContent = 'No transactions found';
    tr.appendChild(td); txBody.appendChild(tr);
    return;
  }

  list.forEach(tx => {
    const tr = document.createElement('tr');

    const tdDate = document.createElement('td'); tdDate.textContent = tx.date || '-'; tr.appendChild(tdDate);

    const tdCredit = document.createElement('td');
    if(tx.credit !== undefined && tx.credit !== null){
      const span = document.createElement('span');
      span.className = 'credit';
      span.textContent = formatAmount(tx.credit);
      tdCredit.appendChild(span);
    } else tdCredit.textContent = '-';
    tr.appendChild(tdCredit);

    const tdBal = document.createElement('td'); tdBal.textContent = tx.balance !== undefined ? formatAmount(tx.balance) : '-'; tr.appendChild(tdBal);

    const tdUtr = document.createElement('td'); tdUtr.textContent = tx.utr || '-'; tr.appendChild(tdUtr);

    const tdUpi = document.createElement('td'); tdUpi.textContent = tx.upi || '-'; tr.appendChild(tdUpi);

    txBody.appendChild(tr);
  });
}

function updateForAccount(accountId){
  const cid = companySelect.value;
  const company = db.companies.find(c => String(c.id) === String(cid));
  if(!company) return;
  const account = company.accounts.find(a => String(a.id) === String(accountId));
  if(!account) return;
  showBalance(account);
  renderTransactions(account.transactions || []);
}


companySelect.addEventListener('change', ()=> {
  const cid = companySelect.value;
  const company = db.companies.find(c => String(c.id) === String(cid));
  if(!company) return;
  populateAccounts(company.accounts);
  
  if(company.accounts.length>0){
    accountSelect.value = company.accounts[0].id;
    updateForAccount(company.accounts[0].id);
  } else {
    showBalance({balance:0});
    renderTransactions([]);
  }
});


accountSelect.addEventListener('change', (e) => updateForAccount(e.target.value));


fetch('db.json')
.then(r=>{
  if(!r.ok) throw new Error('Failed to load db.json');
  return r.json();
})
.then(json=>{
  db = json;
  if(!db.companies || db.companies.length===0){
    companySelect.innerHTML = '<option>No companies</option>';
    accountSelect.innerHTML = '<option>No accounts</option>';
    renderTransactions([]);
    showBalance({balance:0});
    return;
  }
  populateCompanies(db.companies);

  companySelect.value = db.companies[0].id;
  const firstCompany = db.companies[0];
  if(firstCompany.accounts && firstCompany.accounts.length>0){
    populateAccounts(firstCompany.accounts);
    accountSelect.value = firstCompany.accounts[0].id;
    updateForAccount(firstCompany.accounts[0].id);
  } else {
    accountSelect.innerHTML = '<option>No accounts</option>';
    showBalance({balance:0});
    renderTransactions([]);
  }
})
.catch(err=>{
  console.error(err);
  companySelect.innerHTML = '<option>Error</option>';
  txBody.innerHTML = '<tr><td colspan="5" class="muted">Error loading data — check console</td></tr>';
});
