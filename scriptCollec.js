//On commence par récupérer les boutons,
//Avec getElementById, sans faute ni frisson.
//Le premier bouton déclenche l'affichage,
//Le second, la fermeture du paysage.
//On ajoute des écouteurs d'événement,
//Pour activer les fonctions en un instant.
//Le premier écouteur, placé sur le bouton d'affichage,
//Fait disparaître le cache, le rendant visible à l'ouvrage.
//Le second, sur le bouton de fermeture,
//Cache à nouveau la fenêtre, sans fioriture.
//Ainsi, le JavaScript anime la page,
//De manière simple et pratique, sans rage.
    
  
const showPopupButton = document.getElementById('show-popup'); 
const closePopupButton = document.getElementById('close-popup'); 
const popup = document.getElementById('popup');

showPopupButton.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

closePopupButton.addEventListener('click', () => {
  popup.classList.add('hidden');
});


const showPopupButton1 = document.getElementById('show-popup1');
const closePopupButton1 = document.getElementById('close-popup1');
const popup1 = document.getElementById('popup1');

showPopupButton1.addEventListener('click', () => {
  popup1.classList.remove('hidden');
});

closePopupButton1.addEventListener('click', () => {
  popup1.classList.add('hidden');
});


const showPopupButton2 = document.getElementById('show-popup2');
const closePopupButton2 = document.getElementById('close-popup2');
const popup2 = document.getElementById('popup2');

showPopupButton2.addEventListener('click', () => {
  popup2.classList.remove('hidden');
});

closePopupButton2.addEventListener('click', () => {
  popup2.classList.add('hidden');
});


const showPopupButton3 = document.getElementById('show-popup3');
const closePopupButton3 = document.getElementById('close-popup3');
const popup3 = document.getElementById('popup3');

showPopupButton3.addEventListener('click', () => {
  popup3.classList.remove('hidden');
});

closePopupButton3.addEventListener('click', () => {
  popup3.classList.add('hidden');
});


const showPopupButton4 = document.getElementById('show-popup4');
const closePopupButton4 = document.getElementById('close-popup4');
const popup4 = document.getElementById('popup4');

showPopupButton4.addEventListener('click', () => {
  popup4.classList.remove('hidden');
});

closePopupButton4.addEventListener('click', () => {
  popup4.classList.add('hidden');
});


const showPopupButton5 = document.getElementById('show-popup5');
const closePopupButton5 = document.getElementById('close-popup5');
const popup5 = document.getElementById('popup5');

showPopupButton5.addEventListener('click', () => {
  popup5.classList.remove('hidden');
});

closePopupButton5.addEventListener('click', () => {
  popup5.classList.add('hidden');
});




// Tout d'abord, on récupère l'élément de menu,
// Avec querySelector, pour plus de vue.
// On ajoute ensuite un écouteur d'événement,
// Pour détecter lorsque la souris survient.
// Lorsque celle-ci survole l'élément,
// On change la couleur de texte pour un moment.
// Et lorsque la souris repart,
// On remet la couleur initiale, sans retard.

let menu = document.querySelector('#menu');
menu.addEventListener("mouseover", function( event ) {
  event.target.style.color = "red";
})

menu.addEventListener("mouseout", function( event ) {
  event.target.style.color = "";
})