// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQQBYF4XsQPNI4nuCNPZZeqQGstKlEpUI",
  authDomain: "webstream-2161a.firebaseapp.com",
  projectId: "webstream-2161a",
  storageBucket: "webstream-2161a.firebasestorage.app",
  messagingSenderId: "71757392426",
  appId: "1:71757392426:web:a3a75244c20927177b7153"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, onAuthStateChanged };
