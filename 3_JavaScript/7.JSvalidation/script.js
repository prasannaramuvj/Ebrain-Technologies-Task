function formValidateOf(event){

  event.preventDefault();
//-----------------------------------------------------------------------------------------------------//


let name = document.getElementById("name").value;

if(name === null || name === ""){
   
  document.getElementById('nameerrorid').innerHTML = "Name is Required ....";
}
else{
   
  document.getElementById('nameerrorid').innerHTML="";
}
//----------------------------------------------------------------------------------------------------//

let mail = document.getElementById("mail").value;

if(mail === null || mail === ""){
  document.getElementById('emailerrorid').innerHTML = "Mail is Required ....";
}
else{
  document.getElementById('emailerrorid').innerHTML = "";
  
}

//-------------------------------------------------------------------------------------------------------//

let phone = document.getElementById("phone").value;
if(phone === null || phone === ""){
  document.getElementById("phonenoid").innerHTML = "Phone number is Required ........";
}
else{
  document.getElementById("phonenoid").innerHTML = "";

}


//----------------------------------------------------------------------------------------------------//
let dob = document.getElementById("dob").value;
if(dob === ""){
  document.getElementById('dobid').innerHTML = "Date of Birth is Required ..........";
}
else{
  document.getElementById('dobid').innerHTML = "";

}


//------------------------------------------------------------------------------------------------------//


let nationality = document.getElementById('nationality').value;

if(nationality === null || nationality === ""){
  document.getElementById('nationid').innerHTML = "Natinality is Required ..........";

}
else{
  document.getElementById('nationid').innerHTML = "";

}


//------------------------------------------------------------------------------------------------------//
let male = document.getElementById('male');
let female = document.getElementById('female');
let others = document.getElementById('others');

let checkgender = false;
let gender='';

if(male.checked){
  checkgender = true;
  gender = "male";
}

if(female.checked){
  checkgender = true;
  gender = "female";
}
if(others.checked){
  checkgender = true;
  gender = "others";
}
// alert(gender);
if(checkgender === true){
  document.getElementById('gendererrorid').innerHTML="";
}
else{
  document.getElementById('gendererrorid').innerHTML="click your gender ......";

}


//-------------------------------------------------------------------------------------------------------//

let inputcheck1 = document.getElementById('inputcheck1');
let inputcheck2 = document.getElementById('inputcheck2');
let inputcheck3 = document.getElementById('inputcheck3');

let counts = 0;
let language =[];

if(inputcheck1.checked){
  counts++;
  language.push(inputcheck1.value);
}
if(inputcheck2.checked){
  counts++;
  language.push(inputcheck2.value);
}
if(inputcheck3.checked){
  counts++;
  language.push(inputcheck3.value);
}


    if(counts <= 0){
      document.getElementById('langerroreid').innerHTML="select a language is required ........";
    }
    else{
      if(counts <= 2){
      document.getElementById('langerroreid').innerHTML="";
    }
      else{
      document.getElementById('langerroreid').innerHTML="select atlest two language ...........";
      }

    }

    console.log(language);
  
//---------------------------------------------------------------------------------------------------------------------------
   let student = {
    Name : name,
    Email : mail,
    Phone : phone,
    DOB : dob,
    Nationality : nationality,
    Gender : gender,
    Language : language
   }

  console.log(student);
  

  let studentList = localStorage.getItem("students");

  if(studentList === null){
    studentList = [];
  }
  else{
    studentList = JSON.parse(studentList);
  }


  studentList.push(student);


  localStorage.setItem("students",JSON.stringify(studentList));
}

//-----------------------------------------------------------------------------------------------------------------//