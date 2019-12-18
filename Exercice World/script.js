/*
Premier exercice :

Réaliser un Hello World en jQuery, création d'une page web, inclusion de jQuery,
création d'un élément DOM et utilisation de $( "#myId" ).text("Hello World");
(https://learn.jquery.com/using-jquery-core/selecting-elements/ ,
https://learn.jquery.com/using-jquery-core/manipulating-elements/)
*/

// $('body').append('<div id="myId">Hello World !</div>');


// Deuxième exercice :
// Ajout d'un élement <a> sur la page, celui-ci sera modifié via l'instruction .attr
// (https://learn.jquery.com/using-jquery-core/attributes/)




$('a').text('Google').attr('href','https://www.google.com');

$('p').append('<a href="https://www.google.com">Google</a>');


// $('span').append('<a>Google</a>').attr('href','https://www.google.com');



// Troisième exercice :
// Ajout d'un div sur la page, l'apprenant va définir la hauteur et la largeur de l'élément
// en utilisant jQuery.
// (https://learn.jquery.com/using-jquery-core/manipulating-elements/)

$('body').append('<div id="myId">Hello World !</div>').width('150px').height('150px');


// Quatrième exercice :
// Ajout de 4 div enfant au div précédement créé,
// l'apprenant va parcourir les div et ajouter du texte au deuxième div

// Utilisation de la méthode .index() pour afficher l'index via un alert,
// expliquer aux apprenants qu'en javascript, un tableau commence toujours par l'index 0
// et qu'il renvoie vers le premier élément.

//(https://learn.jquery.com/using-jquery-core/manipulating-elements/)
// Exemple de code fonctionnel : https://jsfiddle.net/xpvt214o/786280/

$('#myId').append('<div></div>').append('<div></div>').append('<div></div>').append('<div></div>');
$('#myId div:eq(1)').text('bonjour');
alert($('#myId div:eq(1)').index());

