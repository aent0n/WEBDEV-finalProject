// On définit un tableau de diapositives pour la saison du printemps,
// Avec des images de matériaux comme le calcaire, le granit et le grès, tout en chant.
// On initialise un compteur pour le numéro de diapositive actuelle,
// Pour pouvoir changer de diapositive avec une facilité factuelle.
// On crée une fonction pour changer de diapositive, avec délicatesse,
// En augmentant ou diminuant le numéro de diapositive, sans aucune faiblesse.
// On vérifie que le numéro de diapositive ne dépasse pas les bornes,
// Pour éviter les erreurs et les problèmes, c'est une astuce mignonne.
// On met à jour l'élément HTML de l'image de diapositive en un instant,
// Pour afficher la nouvelle diapositive avec une fluidité constante.
// On utilise setInterval pour changer automatiquement les diapositives,
// Avec un délai de 4 secondes entre chaque diapositive, c'est une belle invite.

const slide = [
    "./ressources/Landing/Team/Group 8Paul Sealecs.svg",
    "./ressources/Landing/Team/Group 9Delphine Chat-Rebond.svg",
    "./ressources/Landing/Team/Group 10Josef Gallé.svg",
    "./ressources/Landing/Team/Group 11Bienvenue Kouartz.svg",
    "./ressources/Landing/Team/Group 12Belinda Röcke.svg",
    "./ressources/Landing/Team/Group 13Émerik Calkair.svg",
    "./ressources/Landing/Team/Group 14Jane Scheeste.svg",
    "./ressources/Landing/Team/Group 15Monik Gräavier.svg",
    "./ressources/Landing/Team/Group 16Finna Regile.svg",
    "./ressources/Landing/Team/Group 17Pierre Cailloux.svg",
];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

setInterval("ChangeSlide(1)", 4000);



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