let endpoint = 'https://68b7bb2173b3ec66cec55e92.mockapi.io/authentication';

let form = document.getElementById('form');
let name = document.getElementById('name');
let mail = document.getElementById('mail');
let password = document.getElementById('password');
let gender = document.getElementById('gender');




form.addEventListener('submit',(e)=>{
  e.preventDefault();


  const user = {
   name:name.value,
   mail:mail.value,
   password:password.value
    
  };

  if(validateInput()){


    fetch(endpoint,{
     method:'POST',
     headers: {'Content-Type':'application/json' },
     body: JSON.stringify(user)
    })

    .then(res=>{
      if(!res.ok) throw new Error ("network failed");
      return res.json();

    })

    .then (data=>{
      alert("successfully registred");
      window.location.href="index1.html";
      console.log(data);
      form.reset();
    })


  }

});


form.addEventListener('click',(e)=>{
  document.getElementById('error').innerHTML="";
  form.reset();
});



function validateInput(){
  let errId = true;


  if(name.value===""||/\d/.test(name.value)){
   errId = false;
   setError(name,"Name is Required");
  }
  else{
    setSuccess(name);
  }
let Mailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(mail.value===""|| !Mailcheck.test(mail.value)){
    errId = false;
    setError(mail,"Mail is Required");
  }
  else{
    setSuccess(mail);
  }
  if(password.value ===""){
    errId = false;
    setError(password,"password is required");
  }
  else if( password.value.length <= 5){
    errId = false;
    setError(password,"password length must be grather than 5 required");
   

  }
  else{
    setSuccess(password);
  }

  // if(gender.value ===""){
  //   errId = false;
  //   setError(gender,"Gender is required ");
  // }
  // else{
  //   setSuccess(gender);
  // }


  return errId;
}

document.querySelectorAll('.line').forEach(input => {
  input.addEventListener('input', () => {
    validateInput();
  });
});

function setError(element,message){
  let Ele = element.parentElement;
  let Elem = Ele.querySelector('.error');
  Elem.innerHTML = message;
  Ele.classList.add('.error');
  Ele.classList.remove('.success');
}

function setSuccess(element){
  let Ele = element.parentElement;
  let Elem = Ele.querySelector('.error');
  Elem.innerHTML="";
  Ele.classList.remove('.error');
  Ele.classList.add('.success');

}