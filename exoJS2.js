
// Exo 7//

function moyenne([a=0, b=0, c=0]){
let result = (a+b+c)/3;
    if(result >= 15){
      return 'Très bien'
    } else if( result >=10){
      return 'Assez bien'
    } else {
      return 'refus'
    }
}
console.log(moyenne([12,14,10]));

// Exo 8
let user = {
    nom: 'Sarony',
    age: 35,
}
let passion = {
    jour: 'Jeudi',
    activite: 'Natation',
}
console.log(user.age);
console.log(passion.activite);

//QuiZ VAR 
// Il est préférable pour cette situation de ne pas utiliser Var pour déclarer tes variables. Let est suffisant.

//Quizz let
//On n'itialise pas une variable avant de l'appeler car elle n'est pas accessible. Lamachine execute le code dans l'ordre d'écriture, dans ce cas il n'existe pas dans sa memoire tant que tu ne la pas créer avant de l'appeler.
//Échange les deux lignes en mettant  ta déclaration en premier et l'appel en second.

//Quizz if-var
// else peut ne pas etre utiliser dans le cas ou il ne renvoie rien.
//Mais en ce qui concerne var ce n'est pas correct d'utiliser cette façon, il faut privilégier 'let' car 'var' et 'let' n'ont pas la meme porté.
//c'est normal que cela marche mais ce n'est pas correct.



//Exo Boucle//
// TODO :JS map phase 1
// TODO : côté template html rajouter plein de <p></p>
// TODO :On va récupérer TOUS les <p> de notre page dans une variable lesTxt via getElementsByTagName
// TODO :On va faire un console log de lesTxt

let lesTxt = document.getElementsByTagName('p');
console.log(lesTxt);

//TODO JS map Phase 2
//TODO Avec la methode Array.from(), dans une nouvelle variable textesTab on va transformer notre htmlCollection en array
//TODO On console log la variables textesTab
//* On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique

let textesTab = Array.from(lesTxt);
console.log(textesTab);

//TODO JS Map Phase 3 (on peut travailler sur un Array)
//TODO Sur textesTab on va utiliser la ƒ° map(),
//TODO dans map(), on va lui passer en param une fonction fléchée qui elle a en parametre une variable temporaire (nom de la variable au choix)
//TODO cette fonction fléchée elle va modifier le innerHTML ou

textesTab.map((text) => text.innerText = 'Hello sir you GOOD?');




//EXO dom 1

// /* let newH1 = document.querySelector('h1');

/*newH1.addEventListener('click',function(){
    this.innerHTML = ("--🥳--");
});
*/


//EXO dom 2 


let titre = document.querySelector('.hClasse');//je désigne l'élément pointé
let ajouterH1 = document.querySelector('#ajoute');//je désigne lélément pointé qui va servir pour la fonction
let supp1 = document.querySelector('#supprimer');

ajouterH1.addEventListener('click', function(){//fonction click avec l'élément qui va s'ajouter
    titre.classList.add('ajouterH1');
});
document.addEventListener("DOMContentLoaded", function () {// addevent null sans cette ligne .. erreur
    supp1.addEventListener('click', function(){
        titre.classList.remove('ajouterH1');//ne supprimer rien pourquoi ?
    });
});

//suppression de la class au click
supp1.addEventListener('click', function(){
    titre.classList.remove('ajouterH1');
});
//toggle de l'élément au click
toggle1.addEventListener('click', function(){
    titre.classList.toggle('ajouterH1');
})

//EXO 3 de la mort

document.body.addEventListener('click', function(event){
    //les variable pour les capturer et celle de l'image
    var x = event.clientX;
    var y = event.clientY;
    var nouvelleImage = document.createElement('img');//new element image 

    nouvelleImage.src = 'https://e7.pngegg.com/pngimages/460/735/png-clipart-denis-brogniart-ah-koh-lanta-poop-photography-2017-thumbnail.png'
    //position en fonction des coordo
    nouvelleImage.style.position = 'absolute';
    nouvelleImage.style.left = x + 'px';
    nouvelleImage.style.top = y + 'px';

    document.body.appendChild(nouvelleImage);//appel ajout de l'image sur le body
    console.log('X :' + x);
    console.log('Y :' + y);
})
