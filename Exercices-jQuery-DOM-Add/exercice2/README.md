Consignes :

- Créer le code jQuery approprié pour ajouter un élément li 
ayant pour texte "Liste item 3" à la fin de l'élément <ol>




 Théorie :

 jQuery permet d'ajouter dynamiquement du contenu à notre page html très facilement.

 Il existe 4 méthodes jQuery permettant d'jaouter du contenu :

 - append() : Insére du contenu à la fin de l'élément sélectionné
 - prepend() : Insére du contenu au début de l'élément sélectionné
 - after() : Insére du contenu aprés l'élément sélectionné
 - before() : Insére du contenu avant l'élément sélectionné

Exemple pour append() :
 $("p").append("Du texte");

 Ici j'insère du contenu à l'intérieur de mon élément <p>
 à la fin de tout contenu présent dans celui-ci


Exemple pour prepend() :
 $("p").prepend("Du texte au début");

 Ici le contenu est toujour inséré à l'intérieur de mon élément <p> 
 mais il est placé tout au début.


Il est possible d'insérer plusieurs éléments en une seule fois avec append ou prepend , 
exemple :

   var txt1 = "du texte";
   var txt2 = "<span>encore du texte</span>";
   $("p").append(txt1, txt2);

   On stocke dans des variables le contenu que l'on souhaite insérer 
   puis on ajoute ces variables séparées par une virgule


  Exemple pour after() et before() :

  $("p").after("Du texte aprés ...");

  $("p").before("Du texte avant ...");

  Ici le contenu est inséré avant ou aprés l'élément, 
  c'est à dire qu'il est inséré avant ou après le conteneur
  Le contenu n'est pas placé à l'intérieur de mes éléments, 
  c'est la différence avec append et prepend.


  Comme pour append et preprend, on peut placer plusieurs éléments avant ou après 
  en une seule fois.




