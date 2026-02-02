function formValidateOf(event) {
  event.preventDefault();

  // A flag to check if the form is valid
  let isFormValid = true;
//----------------------------------------------------------------------------------------------------------//
  // 1. Name Validation
  let name = document.getElementById("name").value;
  if (name === null || name === "" || /\d/.test(name)) {
    document.getElementById('nameerrorid').innerHTML = "Name is Required and cannot contain numbers.";
    isFormValid = false;
  } else {
    document.getElementById('nameerrorid').innerHTML = "";
  }
//-----------------------------------------------------------------------------------------------------------------------//
  // 2. Email Validation
  let mail = document.getElementById("mail").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (mail === null || mail === "" || !emailPattern.test(mail)) {
    document.getElementById('emailerrorid').innerHTML = "Invalid email address format.";
    isFormValid = false;
  } else {
    document.getElementById('emailerrorid').innerHTML = "";
  }
//---------------------------------------------------------------------------------------------------------------//
  // 3. Phone Number Validation
  let phone = document.getElementById("phone").value;
  const phonePattern = /^\d{10}$/;
  if (phone === null || phone === "" || !phonePattern.test(phone)) {
    document.getElementById("phonenoid").innerHTML = "Phone number must be exactly 10 digits and contain only numbers.";
    isFormValid = false;
  } else {
    document.getElementById("phonenoid").innerHTML = "";
  }
//-----------------------------------------------------------------------------------------------------------//
  // 4. DOB Validation
  let dob = document.getElementById("dob").value;
  if (dob === "") {
    document.getElementById('dobid').innerHTML = "Date of Birth is Required.";
    isFormValid = false;
  } else {
    document.getElementById('dobid').innerHTML = "";
  }
//------------------------------------------------------------------------------------------------------//
  // 5. Nationality Validation
  let nationality = document.getElementById('nationality').value;
  if (nationality === null || nationality === "") {
    document.getElementById('nationid').innerHTML = "Nationality is Required.";
    isFormValid = false;
  } else {
    document.getElementById('nationid').innerHTML = "";
  }
//--------------------------------------------------------------------------------------------------//
  // 6. Gender Validation
  let male = document.getElementById('male');
  let female = document.getElementById('female');
  let others = document.getElementById('others');
  let gender;
  let checkgender = male.checked || female.checked || others.checked;
  if (!checkgender) {
    document.getElementById('gendererrorid').innerHTML = "Select your gender.";
    isFormValid = false;
  } else {
    if (male.checked) gender = "male";
    else if (female.checked) gender = "female";
    else gender = "others";
    document.getElementById('gendererrorid').innerHTML = "";
  }
//----------------------------------------------------------------------------------------------------------//
  // 7. Language Validation
  let inputcheck1 = document.getElementById('inputcheck1');
  let inputcheck2 = document.getElementById('inputcheck2');
  let inputcheck3 = document.getElementById('inputcheck3');
  let language = [];
  if (inputcheck1.checked) language.push(inputcheck1.value);
  if (inputcheck2.checked) language.push(inputcheck2.value);
  if (inputcheck3.checked) language.push(inputcheck3.value);
  if (language.length < 2) {
    document.getElementById('langerroreid').innerHTML = "Select at least two languages.";
    isFormValid = false;
  } else {
    document.getElementById('langerroreid').innerHTML = "";
  }
//-------------------------------------------------------------------------------------------------------------//
  if (isFormValid) {
    callofDuty(name, mail, phone, dob, nationality, gender, language);
  }
}
//--------------------------------------------------------------------------------------------//
function callofDuty(name, mail, phone, dob, nationality, gender, language) {
  alert('Successfully registered');

  let student = {
    Name: name,
    Email: mail,
    Phone: phone,
    DOB: dob,
    Nationality: nationality,
    Gender: gender,
    Language: language
  }

  // console.log(student);

  let studentList = localStorage.getItem("students");
  if (studentList === null) {
    studentList = [];
  } else {
    studentList = JSON.parse(studentList);
  }
  studentList.push(student);
  localStorage.setItem("students", JSON.stringify(studentList));
  document.querySelector("form").reset();
}