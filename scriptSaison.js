const slide = [
    "https://cdn.discordapp.com/attachments/788291502374780958/1103803962014056498/Picsart_23-05-05_00-00-56-988.jpg",
    "https://cdn.discordapp.com/attachments/788291502374780958/1103803961699475516/Picsart_23-05-04_23-59-39-893.jpg",
    "https://images.unsplash.com/photo-1553934870-82716bfd909e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://cdn.discordapp.com/attachments/788291502374780958/1103803962286678076/Picsart_23-05-05_00-02-41-470.jpg"
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


const slide1 = [
    "./ressources/Saison/cards/printemps/Group 33calcaire.svg",
    "./ressources/Saison/cards/printemps/Group 34basalte.svg",
    "./ressources/Saison/cards/printemps/Group 35granite.svg",
    "./ressources/Saison/cards/printemps/Group 36schiste.svg",
    "./ressources/Saison/cards/printemps/Group 37grès.svg"

];
let numero1 = 0;

function ChangeSlide1(sens) {
    numero1 = numero1 + sens;
    if (numero1 < 0)
        numero1 = slide1.length - 1;
    if (numero1 > slide1.length - 1)
        numero1 = 0;
    document.getElementById("slide1").src = slide1[numero1];
}

setInterval("ChangeSlide1(1)", 4000);




const slide2 = [
    "./ressources/Saison/cards/été/Group 23sand.svg",
    "./ressources/Saison/cards/été/Group 24argile.svg",
    "./ressources/Saison/cards/été/Group 25dolomite.svg",
    "./ressources/Saison/cards/été/Group 26gypse.svg",
    "./ressources/Saison/cards/été/Group 27shale.svg"
];
let numero2 = 0;

var delay2 = 1700;
var timerId2;
var firstChange2 = true;

function StartTimer2() {
    clearTimeout(timerId2);
    timerId2 = setTimeout(function() {
        ChangeSlide2(1);
    }, delay2);
}
StartTimer2();

function ChangeSlide2(sens) {
    numero2 = numero2 + sens;
    if (numero2 < 0)
        numero2 = slide2.length - 1;
    if (numero2 > slide2.length - 1)
        numero2 = 0;
    document.getElementById("slide2").src = slide2[numero2];
    if (firstChange2) {
        firstChange2 = false;
    } else {
        StartTimer2();
    }}

setInterval("ChangeSlide2(1)", 4000);




const slide3 = [
    "./ressources/Saison/cards/automne/Group 18gravier.svg",
    "./ressources/Saison/cards/automne/Group 19Gneiss.svg",
    "./ressources/Saison/cards/automne/Group 20siltstone.svg",
    "./ressources/Saison/cards/automne/Group 21sArdoisier.svg",
    "./ressources/Saison/cards/automne/Group 22obsi.svg"
];
let numero3 = 0;

var delay3 = 1500;
var timerId3;
var firstChange3 = true;

function StartTimer3() {
    clearTimeout(timerId3);
    timerId3 = setTimeout(function() {
        ChangeSlide3(1);
    }, delay3);
}
StartTimer3();

function ChangeSlide3(sens) {
    numero3 = numero3 + sens;
    if (numero3 < 0)
        numero3 = slide3.length - 1;
    if (numero3 > slide3.length - 1)
        numero3 = 0;
    document.getElementById("slide3").src = slide3[numero3];
    if (firstChange3) {
        firstChange3 = false;
    } else {
        StartTimer3();
    }}

setInterval("ChangeSlide3(1)", 4000);



const slide4 = [
    "./ressources/Saison/cards/hiver/Group 28quartzite.svg",
    "./ressources/Saison/cards/hiver/Group 29marbre.svg",
    "./ressources/Saison/cards/hiver/Group 30gabbro.svg",
    "./ressources/Saison/cards/hiver/Group 31peridotite.svg",
    "./ressources/Saison/cards/hiver/Group 32Rhodo.svg"
    
];
let numero4 = 0;

var delay4 = 2000;
var timerId4;
var firstChange4 = true

function StartTimer4() {
    clearTimeout(timerId4);
    timerId4 = setTimeout(function() {
        ChangeSlide4(1);
    }, delay4);
}
StartTimer4();

function ChangeSlide4(sens) {
    numero4 = numero4 + sens;
    if (numero4 < 0)
        numero4 = slide4.length - 1;
    if (numero4 > slide4.length - 1)
        numero4 = 0;
    document.getElementById("slide4").src = slide4[numero4];
    if (firstChange4) {
        firstChange4 = false;
    } else {
        StartTimer4();
    }
}

setInterval("ChangeSlide4(1)", 4000);



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