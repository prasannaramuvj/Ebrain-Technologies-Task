let form = document.querySelector('#form');
let name = document.querySelector('#name');
let age = document.querySelector('#age');
let email = document.querySelector('#email');
let city = document.querySelector('#city');
let date = document.querySelector('#date');
let phone = document.querySelector('#phone');
let file = document.querySelector('#imgInput');
let imgInput = document.querySelector('#img');
let submitBtn = document.querySelector('#submitBtn');



let userData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : [];

let isEdit = false;
let editId;


window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const editIndex = urlParams.get('edit');

  if (editIndex != null) {
    isEdit = true;
    editId = parseInt(editIndex, 10);

 
     

    const user = userData[editId];
    
    name.value = user.name;
    age.value = user.age;
    email.value = user.email;
    city.value = user.city;
    // date.value = user.date;
     const [day, month, year] = user.date.split("-");
    date.value = `${year}-${month}-${day}`;
    phone.value = user.phone;
    imgInput.src = user.picture;
     
    submitBtn.innerHTML="update";
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateInput()) {

      const [year, month, day] = date.value.split("-");
    const formattedDate = `${day}-${month}-${year}`;
     
    const userInfo = {
      picture: imgInput.src,
      name: name.value,
      age: age.value,
      email: email.value,
      city: city.value,
      date: formattedDate,
      phone: phone.value
    };

    if (isEdit) {
      
      userData[editId] = userInfo;
    } else {
      
      userData.push(userInfo);
      con
    }

    localStorage.setItem('userProfile', JSON.stringify(userData));

    
    window.location.href = 'table.html';
  }
});


file.onchange = function() {
  if (file.files[0] && file.files[0].size < 1000000) { 
    let fileReader = new FileReader();
    fileReader.onload = function(e) {
      imgInput.src = e.target.result;
    }
    fileReader.readAsDataURL(file.files[0]);
  } else {
    alert('File is too large or not selected');
  }
}


function validateInput(){
  const Name = name.value.trim();
  const Age = age.value.trim();
  const Mail = email.value.trim();
  const City = city.value.trim();
  const Date = date.value.trim();
  const Phone = phone.value.trim();
  let success = true;

  if(Name === "" || /\d/.test(Name)){
    success = false;
    setError(name,"Name is required");
  } else {
    setSuccess(name);
  }

  if(Age === "" || Age < 18){
    success = false;
    setError(age,"Age must be 18 or above");
  } else {
    setSuccess(age);
  }

  let Mailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(Mail === "" || !Mailcheck.test(Mail)){
    success = false;
    setError(email,"Valid email is required");
  } else {
    setSuccess(email);
  }

  if(City === "" || /\d/.test(City)){
    success = false;
    setError(city,"City name is required");
  } else {
    setSuccess(city);
  }

  if(Date === ""){
    success = false;
    setError(date," Date must be required");
  } else {
    setSuccess(date);
  }

  if(Phone === "" || !/^\d{10}$/.test(Phone)){
    success = false;
    setError(phone,"Phone number must be 10 digits");
  } else {
    setSuccess(phone);
  }

  return success;
}
document.querySelectorAll('.line').forEach(input => {
  input.addEventListener('input', () => {
    validateInput(); 
  });
});

function setError(element,message){
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');
  errorElement.innerHTML = message;
  inputGroup.classList.add('error');
  inputGroup.classList.remove('success');
}

function setSuccess(element){
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');
  errorElement.innerHTML = "";
  inputGroup.classList.add('success');
  inputGroup.classList.remove('error');
}
