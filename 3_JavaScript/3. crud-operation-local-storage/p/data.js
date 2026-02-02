
const userData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : [];
const dataBody = document.querySelector('#data-body');


function showInfo() {
  dataBody.innerHTML = ""; 
  userData.forEach((element, index) => {
    let newRow = `<tr>
        <td><img src="${element.picture}" alt="Profile" width="50" height="50" class="rounded-circle"></td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.email}</td>
        <td>${element.city}</td>
        <td>${element.date}</td>
        <td>${element.phone}</td>
        <td>
            <button class="btn btn-primary btn-sm" onclick="editInfo(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteInfo(${index})">Delete</button>
        </td>
    </tr>`;
    dataBody.innerHTML += newRow;
  });
}

function editInfo(index) {

  window.location.href = `index.html?edit=${index}`;
}


function deleteInfo(index) {
  if (confirm("Are you sure you want to delete this record?")) {
    userData.splice(index, 1);
    localStorage.setItem('userProfile', JSON.stringify(userData));
    showInfo();
  }
}


showInfo();