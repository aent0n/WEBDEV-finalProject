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