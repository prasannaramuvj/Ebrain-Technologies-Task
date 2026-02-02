let endpoint = 'https://68b7bb2173b3ec66cec55e92.mockapi.io/authentication';


let submitbtn = document.getElementById("form-btn");
let form = document.getElementById("form");
let name = document.getElementById("username");
let password = document.getElementById("password");



form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateInput()) {
    fetch(endpoint)
      .then(res => res.json())
      .then(users => {
        let founduser = users.find(
          u => u.mail === name.value && u.password === password.value
        );

        if (founduser) {
          alert("you are a valid user");
            form.reset();
           

          window.location.href = "index1.html";
        } else {
          alert('incorrect password');
          form.reset();

        }
      })
      .catch(err => {
        console.error("Error fetching users:", err);
      });

      

  }
 
});




function validateInput(){

    let erid = true;


  let Mailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.value === "" ||!Mailcheck.test(name.value)){
      erid = false;
      setError(name,'Name is Required');
    }
    else{
      setSuccess(name);
    }

    if(password.value ===""){
      erid=false;
    setError(password,'Password is Required');}
    else{
      setSuccess(password);
    }

    return erid;
  }

  document.querySelectorAll('.line').forEach( input =>{
    input.addEventListener('input',() => {
      validateInput();
    })
  })

  function setError(element,message){
    let Element = element.parentElement;
    let Eleerror = Element.querySelector('.error');

    Eleerror.innerHTML=message;
    Element.classList.add('error');
    Element.classList.remove('success');
  }

  function setSuccess(element){
    let Element = element.parentElement;
    let Eleerror = Element.querySelector('.error');
    Eleerror.innerHTML="";
    Element.classList.add('success');
    Element.classList.remove('error');

  }


  function clearValidation(){

    document.querySelectorAll('.error').forEach(err =>{
      err.innerHTML= "";
    });

    document.querySelectorAll('.error', '.success').forEach(field =>{
      field.classList.remove('.error', '.success');
    })
  }

//   document.getElementById("modalinformation").addEventListener("show.bs.modal", () => {
//   form.reset();
//   clearValidation();
// });



