// On importe les modules Firebase avec brio, ma foi,
// Pour utiliser ses fonctionnalités sans aucun émoi.
// On configure Firebase avec nos informations clés,
// Pour que tout fonctionne comme il se doit, sans aucun délai.
// On initialise l'application Firebase,
// Et on récupère les données, une tâche bien aise.
// On crée une fonction pour récupérer une collection,
// Qui retourne un tableau des documents et leurs identifiants, superbe fonction !
// On récupère les champs d'identification et de mot de passe sans tarder,
// Pour les utiliser dans la suite du code, sans aucun méfait.
// On ajoute un écouteur d'événement sur le formulaire avec conviction,
// Pour détecter le clic du bouton de soumission avec précision.
// Lorsque l'événement se produit, on empêche le comportement par défaut avec aisance,
// Pour éviter le rechargement de la page, sans aucune errance.
// On recherche dans la collection des utilisateurs avec détermination,
// Pour trouver le correspondant à l'identifiant, une noble mission.
// Si l'utilisateur n'est pas trouvé, on affiche un message d'erreur en un instant,
// Pour éviter toute confusion, c'est un choix pertinent.
// Si le mot de passe correspond à celui de l'utilisateur avec succès,
// On affiche validation, c'est un fait.
// Sinon, le mot de passe est incorrect, DIANTRE, NON!
// On affiche un message d'erreur, pour éviter tout égarement.

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

      
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9kjcDQZPvZXUgpJ8YdkMQjCeRfZL_9k4",
  authDomain: "nth-pottery-323907.firebaseapp.com",
  projectId: "nth-pottery-323907",
  storageBucket: "nth-pottery-323907.appspot.com",
  messagingSenderId: "19299134769",
  appId: "1:19299134769:web:d9ba1abcf59f851a10d410"
};
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// fonction pour récupèrer une collection (READ)
const getDocument = async (collectionName) => {
    const DocumentColRef = collection(db, collectionName);
    const DocumentSnapshot = await getDocs(DocumentColRef);
    const DocumentList = DocumentSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    return DocumentList
}


const identifiantInput = document.getElementById('identifiant');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('click', async (event) => {
  event.preventDefault();

  const identifiant = identifiantInput.value;
  const password = passwordInput.value;

  const users = await getDocument('utilisateurs');
  const user = users.find(u => u.identifiant === identifiant); //rechercher le premier élément d'un tableau qui satisfait une condition donnée.

  if (!user) {
    console.log('Utilisateur non trouvé');
  } else if (user.motDePasse === password) {
    console.log('Connecté en tant que', identifiant);
  } else {
    console.log('Mot de passe incorrect');
  }
});