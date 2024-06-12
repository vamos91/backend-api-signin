**R-bnb est une application mobile permettant de géolocaliser un utilisateur en matérialisant sa position (ses déplacements) sur une carte interactive et en offrant la possibilité d’y ajouter des points d'intérêt représentant des logements. L'application permettra:** 
* d'afficher tous les appartements sur une carte
* de se connecter
* de s'incrire
* d'afficher unique ses appartements
* d'ajouter un nouveau appartement (titre, description, prix)
* d'afficher un appartement

![This is an alt text.](/image/home.png "This is a sample image.")


**L’application permet également de rentrer en contact avec l’ensemble des utilisateurs via un blog.**


_Cette fois-ci vous passerez du côté mobile grâce à React Native._

**Quel avantage ? Vous allez pouvoir créer de véritables applications mobiles disponibles dans les stores.**


Pour faciliter le développement et le déploiement sur Android et iOS, vous utiliserez l'environnement Expo. Voyez-le comme une surcouche au-dessus de React Native vous permettant de vous faire gagner du temps.

Avec React Native vous allez voir qu’il n’y a pas de changements concernant les principes fondamentaux que vous avez appris sur React et Redux, tout ce que vous avez appris peut s’appliquer à React Native.


La différence va surtout se situer au niveau du JSX. En React Native, il n’est plus question d’utiliser les balises HTML, il faudra donc apprendre de nouvelles balises. Par exemple, on ne dit plus <div> mais <view>….


Aujourd'hui, vous allez découvrir l'environnement Expo et React Native.

Vous allez également devoir mettre en place la navigation de l’appli qui se fera grâce à la librairie React Navigation.

En utilisant les composants de React Native, vous allez vite vous rendre compte qu’ils sont un peu basiques en termes de design. Vous allez utiliser la librairie graphique React Native Elements qui dispose de nombreux composants sympas et customisables très facilement !

Pour finir vous allez revoir Redux, en le mettant en place dans le projet afin de centraliser le pseudo de l’utilisateur qui pourra ainsi être utilisé ultérieurement.


L’objectif fonctionnel de cette journée :

Préparer l’environnement de travail pour déployer l’app sur mobile.
Mettre en place la navigation de l’application.
Mémoriser le pseudo saisi.
Vos skills tech à l’issue de cette journée:

Mise en place d’ Expo.
Mettre en place la navigation avec React Router.
Mettre en place Redux.
Intégrer les écrans avec la librairie  React Native Elements.

Aperçu de l’app :

### Whimsical
   
# 1 - PRÉPARATION DE L’ENVIRONNEMENT DE TRAVAIL

## 1.1 Initialiser le projet
👉 Créez le répertoire R-bnb dans le répertoire .nextech/r-bnb/project/.

👉 Initialisez un nouveau projet nommé part1 avec Expo.

👉 Positionnez-vous sur le répertoire part1 via le terminal :

cd ./nextech/project/r-bnb/part1


👉 Dans le répertoire part1, exécutez la commande expo start pour lancer l’app de base.

## 1.2 Lancer l’app
3 solutions depuis Expo :


👉 Directement sur le mobile :

Après avoir téléchargé l’application Expo sur le mobile, il faudra, via l’application, scanner le QR Code affiché par Expo. Après un petit temps d’attente, l’application va se lancer. À chaque fois que vous sauvegardez un changement dans vos fichiers, l’application se relance.


👉 Avec l’émulateur :

Il faudra pour cela télécharger et installer l’émulateur mobile.

La configuration d’un émulateur peut se révéler fastidieuse (notamment sous Windows), privilégiez l’application mobile Expo dans un premier temps.


## 1.3 Module React Navigation
👉 Installez tous les modules de React Navigation.



# 2 - MISE EN PLACE DE LA NAVIGATION

Avant de commencer à développer les fonctionnalités de l’application, il est primordial de mettre en place la mécanique de navigation.

Le composant React Navigation permet de réaliser pas mal de choses en termes de navigation. Il fait indéniablement gagner du temps mais il peut vite devenir complexe, surtout quand on mixe plusieurs types de navigation.


L'objectif de cette 2ème étape:

Mettre en place la navigation avec React Navigation.


Instructions

## 2.1 Overview de la navigation
👉 Schématisez sur papier l'enchaînement des écrans pour avoir une vision claire de la navigation.

👉 Déterminez le type de composants de navigation à utiliser pour chaque partie.


## 2.2 Créer les écrans
👉 Dans un répertoire nommé screens, mettez en place les composants représentant les différents écrans. Au total, créez 5 écrans : 

SignupScreen pour l'écran d'inscription.
SigninScreen pour l'écran d'authentification.
HomeScreen pour l’écran représentant la home.
MapScreen pour l’écran représentant la carte interactive.
ProfileScreen pour l’écran représentant les appartements de chaque user.


👉 Réalisez des intégrations très minimalistes. L’objectif est simplement d’avoir un texte qui s’affiche au centre afin d’indiquer le nom de l’écran.





## 2.3 Les composants de navigation
👉 Dans le composant principal de l’app, importez les composants de navigation précédemment identifiés.

👉 Initialisez les composants de navigation avec les écrans associés.

C’est à cette étape qu’il faut imbriquer les composants de navigation.


👉 Désactivez le menu du haut sur l’ensemble de la navigation.

## 2.4 Customiser le menu
👉 Mettez en place les pictos correspondants à l’image suivante. Attention ! Il faut importer le module de la librairie du picto choisi.


👉 Modifiez les couleurs des icons :

Pour le statut inactif appliquez la couleur #FFFFFF.
Pour le statut actif appliquez la couleur #eb4d4b.
👉 Sur le menu, appliquez la couleur de fond #130f40.


# 3 - INTÉGRATION DES ÉCRANS

La navigation est maintenant en place !

Vous pouvez désormais naviguer sur l’app.

Là, les différents écrans qui s’affichent sont un peu… fades. 😞

Allez, retroussez vos manches pour rendre l’app un peu plus sexy ! 😍


L'objectif de cette 3ème étape:

Intégrer les écrans Home et Profile en respectant le plus possible les maquettes.


Instructions


## 3.1 React Native Elements
👉 Installez le module React Native Elements.



## 3.2 Écran de la Home
👉 Sur le composant qui représente l’écran de la Home, importez le module React Native Elements.

👉 Sur ce même composant, mettez en place le champ de saisie pour le pseudo ainsi que le bouton. Regardez bien la documentation car vous allez devoir les customiser pour qu’ils se rapprochent le plus possible de la maquette.


👉 Codez l'application en fonction de la maquette... Good luck !

![This is an alt text.](/image/Airbnb.png "This is a sample image.")



