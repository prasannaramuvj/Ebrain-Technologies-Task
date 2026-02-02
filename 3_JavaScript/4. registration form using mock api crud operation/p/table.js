let endpoint = 'https://68b7bb2173b3ec66cec55e92.mockapi.io/users';
const table = document.getElementById('table-body');
let usersData = []; 

async function collectuser() {
  let collect = await fetch(endpoint);
  usersData = await collect.json();
  renderTable(usersData);
}

function renderTable(users) {
  table.innerHTML = "";

    if (users.length === 0) {
    let row = `<tr>
        <td colspan="7" style="text-align:center; padding:10px; font-weight:bold; color:red;">
          No results found
        </td>
      </tr>`;
    table.innerHTML = row;
    return;
  }


  users.forEach((user, index) => {
    renderUseritem(user, index);
  });
}

function renderUseritem(users, index) {



  let row = `<tr>
    <td>${index + 1}</td>
    <td>${users.id}</td>
    <td>${users.name}</td>
    <td>${users.mail}</td>
    <td>${users.address}</td>
    <td>${users.pin}</td>
    <td style="display:flex;justify-content:space-around;outline:none;">
      <button class="btn-edit" onclick="editUser(${users.id})">Edit</button>
      <button class="btn-dele" onclick="deleteUser(${users.id})">Delete</button>
    </td>
  </tr>`;
  table.innerHTML += row;
}

document.getElementById('search').addEventListener('input', (e) => {
  let keyword = e.target.value.toLowerCase();
   let filtered = usersData.filter(user =>
    user.name.toLowerCase().includes(keyword) ||
    user.mail.toLowerCase().includes(keyword) ||
    user.address.toLowerCase().includes(keyword) ||
    user.pin.includes(keyword)
  );

  
  renderTable(filtered);
});

function editUser(id) {
  window.location.href = `index.html?id=${id}`;
}

function deleteUser(id) {
  if (confirm("Are you sure you want to delete this user?")) {
    fetch(`${endpoint}/${id}`, { method: "DELETE" })
      .then(() => { collectuser(); });
  }
}

collectuser();
