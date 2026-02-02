  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCZH8gZWByrD_ocvtCDI4MDrIpTo_HJnXs",
    authDomain: "fir-authentication-89be9.firebaseapp.com",
    projectId: "fir-authentication-89be9",
    storageBucket: "fir-authentication-89be9.appspot.com",
    messagingSenderId: "129238925127",
    appId: "1:129238925127:web:c64787f139c96d65ab1662"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app); // ✅ create auth instance

  // Button click
  const submit = document.getElementById('submit');
  submit.addEventListener("click", function(event) {
    event.preventDefault();

    // ✅ get values inside the event listener
    const email = document.getElementById('name').value;
    const password = document.getElementById('password').value;
     if(validateInput()){
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Account created successfully for: " + user.email);
        window.location.href="login.html"
      })
      .catch((error) => {
        alert(error.message);
      });
    }
  });


     const email = document.getElementById('name');
    const password = document.getElementById('password');

    function validateInput(){
      let error = true;
    

        let Mailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if(email.value === "" || !Mailcheck.test(email.value)){
        let error = false;
        setError(email,"Email is Required");
      }
      else{
        setSuccess(email);

      }

      if(password.value === ""){
        let error = false;
        setError(password,"Password is Required");

      }
        else{
        setSuccess(password);

      }
      return error;

    }
    document.querySelectorAll('.line').forEach(input => {
  input.addEventListener('input', () => {
    validateInput(); 
  });
});


    function setError(element,message){
      const ele = element.parentElement;
      const ele1 = ele.querySelector('.error');
            ele1.innerHTML = message;
      ele.classList.add('error');
      ele.classList.remove('success');

    }
    
    function setSuccess(element){
      const ele = element.parentElement;
      const ele1 = ele.querySelector('.error');
            ele1.innerHTML = "";
      ele.classList.add('success');
      ele.classList.remove('error');

    }