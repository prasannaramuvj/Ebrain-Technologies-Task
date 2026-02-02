let endpoint = 'https://68b7bb2173b3ec66cec55e92.mockapi.io/users';


const input = document.getElementById('name');
const mail = document.getElementById('mail');
const address = document.getElementById('address');
const pin = document.getElementById('pin');

const createbtn = document.getElementById('create');
const form = document.getElementById('form');
const table = document.getElementById('table-body');
const cancel = document.getElementById('cancel');
const title = document.getElementById("form-title");

 const urlParams = new URLSearchParams(window.location.search);
  const editId = urlParams.get("id");

         
   if (editId){
    alert("are you want to edit");
      title.innerText = "REGISTER FORM";
      createbtn.innerText = "Update";

      fetch(`${endpoint}/${editId}`)
        .then(res => res.json())
        .then(user => {
          document.getElementById("name").value = user.name;
          document.getElementById("mail").value = user.mail;
          document.getElementById("address").value = user.address;
          document.getElementById("pin").value = user.pin;

          cancel.style.display="block"
        });
    }
   form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const user = {
        name: document.getElementById("name").value,
        mail: document.getElementById("mail").value,
        address: document.getElementById("address").value,
        pin: document.getElementById("pin").value
      };

    if(validateInput()){
      
      if (editId) {
    
      await fetch(`${endpoint}/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });
      
    } else {
      
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });
      alert("user registered");
    }

    window.location.href ="table.html";
  }
  });



function reset() {
  form.reset();
  // title.innerHTML="Edit User";
  createbtn.innerHTML = 'Create';
  cancel.style.display = "none";
  editId = null;
}

cancel.addEventListener("click", () => {
  reset();
});


function validateInput(){
  let logic = true;
  let Name = input.value;
  let Mail = mail.value;
  let Address = address.value;
  let Pin = pin.value;


    if(Name ==="" || /\d/.test(Name)){
      logic = false;
      setError(input,"Name is Required")
    }
    else{
      setSuccess(input);

    }

  let Mailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(Mail === "" || !Mailcheck.test(Mail)){
      logic = false;
      setError(mail,"Mail  is Required");
    }
    else{
      setSuccess(mail);
    }


    if(Address ===""|| /\d/.test(Address) ){
      logic = false;
      setError(address,"Address id required");
    }
    else{
      setSuccess(address)
    }

    if(Pin ==="" || !/^\d{6}$/.test(Pin)){
      logic = false;
      setError(pin,"Pin is required")
    }
    else{
      setSuccess(pin);
    }

    return logic;

}

document.querySelectorAll('.line').forEach(input => {
  input.addEventListener('input', () => {
    validateInput(); 
  });
});

function setError(element,message){

  let Element = element.parentElement;

  let newEle = Element.querySelector('.error');

  newEle.innerHTML=message;
  Element.classList.add('error');
  Element.classList.remove('success');

}

function setSuccess(element){
  let Element = element.parentElement;
  let newEle = Element.querySelector('.error');

  newEle.innerHTML="";
  Element.classList.add('success');
  Element.classList.remove('error');

}