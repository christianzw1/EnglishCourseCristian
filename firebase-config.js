// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBX2JHruDnYp9o9pCdMqi-Yr0e5HEl2NQM",
  authDomain: "cursoingles-cristian.firebaseapp.com",
  projectId: "cursoingles-cristian",
  storageBucket: "cursoingles-cristian.firebasestorage.app",
  messagingSenderId: "68297946104",
  appId: "1:68297946104:web:b96f62ed30352bbf08dc0d",
  measurementId: "G-SDFGZNV2RG"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a autenticação para usarmos nas outras páginas
export const auth = getAuth(app);