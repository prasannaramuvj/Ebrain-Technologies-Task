import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

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
const auth = getAuth(app);

// Input references
const emailInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const submit = document.getElementById('submit');

// ✅ Validation function
function validateInput() {
  let valid = true;
  const Mailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value.trim() === "" || !Mailcheck.test(emailInput.value.trim())) {
    valid = false;
    setError(emailInput, "Enter a valid email");
  } else {
    setSuccess(emailInput);
  }

  if (passwordInput.value.trim() === "") {
    valid = false;
    setError(passwordInput, "Password is required");
  } else {
    setSuccess(passwordInput);
  }

  return valid;
}

document.querySelectorAll('.line').forEach(input => {
  input.addEventListener('input', () => {
    validateInput(); 
  });
});

function setError(element, message) {
  const parent = element.parentElement;
  const errorDisplay = parent.querySelector('.error');
  if (errorDisplay) errorDisplay.innerHTML = message;
  parent.classList.add('error');
  parent.classList.remove('success');
}

function setSuccess(element) {
  const parent = element.parentElement;
  const errorDisplay = parent.querySelector('.error');
  if (errorDisplay) errorDisplay.innerHTML = "";
  parent.classList.add('success');
  parent.classList.remove('error');
}


submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (validateInput()) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("✅ Success login");
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert("❌ " + error.message);
      });
  }
});
