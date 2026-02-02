import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } 
  from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDGAuzFcax89JHckhyPtvgkurtnMjw5kYM",
  authDomain: "otp-verification-a0138.firebaseapp.com",
  projectId: "otp-verification-a0138",
  storageBucket: "otp-verification-a0138.appspot.com",
  messagingSenderId: "1025814754061",
  appId: "1:1025814754061:web:3e89edb40abcc9d99c7644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Initialize reCAPTCHA
window.onload = function() {
  window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    'size': 'normal',
    'callback': (response) => {
      console.log("reCAPTCHA verified!");
    }
  });
};

// Send OTP
window.sendOTP = function() {
  const phoneNumber = document.getElementById('phoneNumber').value;
  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then(confirmationResult => {
      window.confirmationResult = confirmationResult;
      alert("OTP sent successfully!");
    })
    .catch(error => {
      console.error(error);
      alert("Error sending OTP: " + error.message);
    });
};

// Verify OTP
window.verifyOTP = function() {
  let otp = "";
  document.querySelectorAll('#otp input').forEach(input => {
    otp += input.value;
  });

  window.confirmationResult.confirm(otp)
    .then(result => {
      alert("Phone number verified successfully!");
      console.log("User info:", result.user);
    })
    .catch(error => {
      alert("Invalid OTP: " + error.message);
    });
};

// OTP input auto move & backspace handling
document.addEventListener('DOMContentLoaded', function() {

  function OTPverification() {
    const inputs = document.querySelectorAll('#otp > *[id]');

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('keydown', function(event) {

        if (event.key === "Backspace") {
          inputs[i].value = "";
          if (i !== 0) {
            inputs[i - 1].focus();
          }
          return;
        }

        if (event.key >= "0" && event.key <= "9") {
          inputs[i].value = event.key;
          if (i !== inputs.length - 1) {
            inputs[i + 1].focus();
          }
          event.preventDefault();
        } else {
          event.preventDefault();
        }

      });
    }
  }

  OTPverification();

  // Attach buttons
  document.getElementById('btn1').addEventListener('click', sendOTP);
  document.getElementById('btn').addEventListener('click', verifyOTP);

});
