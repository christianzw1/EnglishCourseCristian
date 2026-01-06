import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase-config.js";

// Verifica o estado do usuário
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Usuário está logado, tudo certo!
        console.log("Usuário logado:", user.email);
    } else {
        // Usuário NÃO está logado, manda pro login
        console.log("Sem usuário, redirecionando...");
        window.location.href = "login.html";
    }
});