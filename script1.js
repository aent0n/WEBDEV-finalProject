const caillouList = [{
    "nom": "Caillou agate",
    "description": "Cette pierre peut sembler ordinaire à première vue, mais elle est en réalité très polyvalente. Elle peut être utilisée pour stimuler la créativité, améliorer la confiance en soi et favoriser la guérison émotionnelle. De plus, chaque agate est unique en termes de motif et de couleur, ce qui la rend idéale pour la décoration intérieure ou la collection de pierres.",
    "prix": 19.99,
    "img": "C:/Users/Anton/Documents/Cours-Bachelor/web-dev/code/exercices-js/12_burger/ressources/AG.jpg",
    "composition": [" silice", " quartz", " calcédoine", " oxygène"],
    "id": 1
    },

    {
    "nom": "Caillou jaspe dalmatien",
    "description": "Cette pierre est nommée ainsi en raison de ses taches noires, qui ressemblent à celles d'un chien dalmatien. Bien que cette pierre soit souvent considérée comme ordinaire, elle peut en fait aider à améliorer la communication et la confiance en soi. Elle est également idéale pour ceux qui cherchent à surmonter les traumatismes émotionnels ou les peurs.",
    "prix": 9.99,
    "img": "C:/Users/Anton/Documents/Cours-Bachelor/web-dev/code/exercices-js/12_burger/ressources/JD.jpg",
    "composition": [" silice", " quartz", " argile", " calcédoine"],
    "id": 2
    },
    
    {
    "nom": "Caillou de lave",
    "description": "Cette pierre est souvent utilisée pour sa capacité à absorber les huiles essentielles et à les libérer lentement dans l'air. Elle est donc idéale pour créer une ambiance de détente dans votre espace de vie. De plus, la pierre de lave est très légère, ce qui la rend idéale pour les bijoux.",
    "prix": 29.99,
    "img": "C:/Users/Anton/Documents/Cours-Bachelor/web-dev/code/exercices-js/12_burger/ressources/PDL.jpg",
    "composition": [" fer", " magnésium", " calcium", " basalte"],
    "id": 3
    },

    {
    "nom": "Caillou de quartzite",
    "description": "Cette pierre est souvent confondue avec le quartz, mais elle est en fait plus dure et plus résistante. Elle est souvent utilisée pour la construction de routes et de bâtiments, mais elle peut également être utilisée dans la décoration intérieure. En raison de sa robustesse, elle est idéale pour les zones à forte circulation.",
    "prix": 49.99,
    "img": "C:/Users/Anton/Documents/Cours-Bachelor/web-dev/code/exercices-js/12_burger/ressources/QZ.jpg",
    "composition": [" quartz minéral", " grès"],
    "id": 4
    },

    {
    "nom": "Caillou de sable",
    "description": "Cette pierre est souvent considérée comme ordinaire, mais elle peut être utilisée pour créer une ambiance naturelle dans votre espace de vie. Elle peut être utilisée comme matériau de remplissage dans les jardins de rocaille ou comme décoration dans les aquariums.",
    "prix": 4.99,
    "img": "C:/Users/Anton/Documents/Cours-Bachelor/web-dev/code/exercices-js/12_burger/ressources/CS.jpg",
    "composition": [" silicium", " oxygène"],
    "id": 5
    }
]





// Voici la liste des burgers (le fichier se trouve dans le dossier data.js)
console.log('caillouList', caillouList)
console.log('          ')


console.log('----------')
console.log('Etape 1:')




// Etape 1
// Pour chacun des burgers affiche le nom dans la console
caillouList.forEach(caillouList => {

    console.log(caillouList.nom)
})


console.log('----------')
console.log('Etape 2:')
console.log('voir script.js directement')


// Etape 2
// Dans #burger-container afficher le nom des burgers

caillouContainer = document.querySelector('#caillou-container')

//caillouList.forEach(burgerList => {

    //caillouContainer.innerHTML += `<div class="flex pt-5 px-5">${caillouList.nom}</div>`
//})



console.log('----------')
console.log('Etape 3:')
console.log('voir script.js directement')
// Etape 3 
// Ajouter la description et le prix 
//caillouList.forEach(caillouList => {

    //caillouContainer.innerHTML +=
     //`<div class="flex border flex-col pt-5 px-5">
         //<div class="flex border">${caillouList.nom}</div>
         //<div class="flex border pt-5"> ${caillouList.description}</div>
         //<div class="flex border pt-5"> ${caillouList.prix} </div>
     //</div>`
//})


console.log('----------')
console.log('Etape 4:')
console.log('voir script.js directement')

// Etape 4 
// Afficher l'image du burger
caillouList.forEach(caillouList => {

    caillouContainer.innerHTML +=
     `<div class="flex pt-10 px-5">
        <div class="flex flex-col">
             <div class="flex underline underline-offset-4 text-xl ">${caillouList.nom}:</div>
             <div class="flex pt-5" style="max-width:800px"> ${caillouList.description}</div>
             <div class="flex pt-5"> Prix :⠀<div class="font-bold"> ${caillouList.prix}€ </div></div>
             <div class="flex pt-5">
                 <div class="flex pt-2"> Composition: ${caillouList.composition} </div>
                 <a href="#" style="cursor: not-allowed" class="bg-slate-500 flex justify-center rounded-2xl mx-10 p-2 text-slate-100 mb-5 transition-transform cursor-pointer hover:scale-105">Acheter maintenant</a>

             </div>
        </div>
        <div class=" pl-20 pt-5"> <img id="caillouxImgs${caillouList.id}" src="${caillouList.img}"></img> </div>
    </div>
    <div class="pt-5"></div>`
})

// Etape 5
// Ajouter des nouveaux burgers dans le fichier data.js
console.log('----------')
console.log('Etape 5:')
console.log('voir caillouList directement (remplacées pas des pierres, du coup)')

// Etape 6 
// Ajouter votre site sur github page et ajouter le lien dans le cours
//(*fait*)

// Etape 7 (Bonus)
// Rendre vos site le plus attractif possible en changeant le style
// Vous pouvez remplacer les burgers par d'autre élements (ex: des films, des livres, des jeux vidéos, des personnages, des animaux, etc...)

// Etape 8 (Bonus)
// Afficher la liste des ingrédients

//Etape 9 (Bonus ++)
// Animation des images + menu on hover in/out

img1 = document.querySelector('#caillouxImgs1');

img1.addEventListener('mouseover', function() {
    img1.style.transform = "scale(1.6)";
    img1.style.transition = "transform 0.25s ease";
})
img1.addEventListener('mouseout', function() {
    img1.style.transform = "scale(1)";
    img1.style.transition = "transform 0.65s ease";
})
img2 = document.querySelector('#caillouxImgs2');

img2.addEventListener('mouseover', function() {
    img2.style.transform = "scale(1.6)";
    img2.style.transition = "transform 0.25s ease";
})
img2.addEventListener('mouseout', function() {
    img2.style.transform = "scale(1)";
    img2.style.transition = "transform 0.65s ease";
})
img3 = document.querySelector('#caillouxImgs3');

img3.addEventListener('mouseover', function() {
    img3.style.transform = "scale(1.6)";
    img3.style.transition = "transform 0.25s ease";
})
img3.addEventListener('mouseout', function() {
    img3.style.transform = "scale(1)";
    img3.style.transition = "transform 0.65s ease";
})
img4 = document.querySelector('#caillouxImgs4');

img4.addEventListener('mouseover', function() {
    img4.style.transform = "scale(1.6)";
    img4.style.transition = "transform 0.25s ease";
})
img4.addEventListener('mouseout', function() {
    img4.style.transform = "scale(1)";
    img4.style.transition = "transform 0.65s ease";
})
img5 = document.querySelector('#caillouxImgs5');

img5.addEventListener('mouseover', function() {
    img5.style.transform = "scale(1.6)";
    img5.style.transition = "transform 0.25s ease";
})
img5.addEventListener('mouseout', function() {
    img5.style.transform = "scale(1)";
    img5.style.transition = "transform 0.65s ease";
})

let menu = document.querySelector('#menu');
menu.addEventListener("mouseover", function( event ) {
    // on met l'accent sur la cible de mouseenter
    event.target.style.color = "red";
})
menu.addEventListener("mouseout", function( event ) {
    // on met l'accent sur la cible de mouseenter
    event.target.style.color = "";
})