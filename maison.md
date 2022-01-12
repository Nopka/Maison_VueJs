# La maison

## Bases
Créer une vue principale de la maison. Afficher un texte établissant que nous sommes dans l'entrée de la maison. Cette vue est ensuite inclue dans le composant App comme route par défaut.

Créer ensuite chaque vue de pièce de la maison : 

- Chambre
- Cuisine
- Grenier
- Salon

Chaque vue affiche dans la page le nom de la pièce en cours et une photo.

## A faire

1. Dans le salon et la chambre, créer une donnée lumière et ajouter un bouton qui permet d'allumer et éteindre la lumière (afficher un indicateur visuel qui montre que la lumière est éteinte ou allumée)
2. Faire en sorte qu'on puisse allumer la lumière du salon et de la chambre depuis l'entrée de la maison en ayant recours à `$store` ou à `$bus`.  Quel est l'avantage d'avoir recours au store plutôt qu'au bus ?
3. Faire en sorte qu'on puisse aller au grenier depuis la chambre.
4. Cacher un objet dans une des pièce de la maison. Quand on clic sur cet objet, la page d'accueil de la maison doit afficher "l'objet cache est dans la pièce : [nom de la pièce]"
5. Faire en sorte que la question 4 fonctionne même après avoir rechargé la page



