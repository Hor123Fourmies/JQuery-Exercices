Consignes :

- Créer le code jQuery approprié pour ajouter la classe "important" à l'élément <p>




 Théorie :

 jQuery permet de supprimer, d'ajouter ou même de remplacer les classes des éléments html.

 En javascript, il et également possible de le faire via les méthodes de classList 
 ou via la propriété className, le gros avantage de jQuery dans le cas de la manipulation 
 de classe est de fournir une méthode unique supportée par tous les navigateurs 
 contrairement à classList qui ne fonctionnera que sur les navigateurs les plus récents.

 Voici les 3 méthodes jQuery que nous pouvons utiliser :

 - addClass()
 Permet d'ajouter une ou plusieurs classes à l'élément sélectionné

 - removeClass()
 Permet de supprimer une ou plusieurs classes de l'élément sélectionné

 - toggleClass()
 Permet de supprimer ou d'ajouter une ou plusieurs classes 
 (on ajoute lors de la  première exécution, on supprime lors de la seconde)


 Exemples addClass() :

 $("button").click(function(){
     $("h1, h2, p").addClass("blue");
     $("div").addClass("important");
 });

 Lors du click sur le bouton, on ajoute la classe "blue" aux élémen h1,h2 et p, 
 on ajoute également la classe "important" aux éléments div


 $("button").click(function(){
     $("#div1").addClass("important blue");
 });


On peut également ajouter plusieurs classes en les séparant par des espaces



Exemples removeClass() :

$("button").click(function(){
    $("h1, h2, p").removeClass("blue");
});

On retire la classe "blue" à tous les éléments h1,h2 et p



Exemples toggleClass() :

$("button").click(function(){
    $("h1, h2, p").toggleClass("blue");
});


On alterne entre ajout et suppression de la classe "blue" pour les éléments h1,h2 et p

