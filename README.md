# Application gestionnaire de l'état de santé d'un patient

## Packages utilisés

Afin de developper une application ermogonomique les packages suivants ont été utilisés:
* @material-ui
* @types/react-bootstrap

Dans l'objectif de permettre la navigation entre les differents components le package @types/react-router-dom a été utilisé.

## Stockage 

Le type de stockage sur utilisé sur l'application est simple , il a été implementé le design pattern Singleton sur une classes gestionnaire
des états saisies par l'utilisateur. J'ai choisi de proceder de cette maniere puisque grâce au fait qu'on partage une seule instance
du singleton on aura disponible sur tout l'application les mêmes données.

## Lancer l'application 

Pour lancer l'application vous devrez suivre les pas suivants:
1. Cloner le projet sur votre ordinateur et l'ouvrir sur votre IDE de preference.
1. Ouvrir une terminal et lancer la commande `npm install` 
1. Maintenant il ne reste que lancer la commande `npm start`

## Possibles ameliorations 

Les ameliorations qu'à priori je peux envisager sont: 

* Changer le type de stockage , alors je proposerai passer à une DB afin de rendre persistantes les informations même quand le navigateur web soit fermé tout en respectant le RGPD.
* L'UI serait un autre sujet sur lequel je pense qu'il y a pas mal de chose à ameliorer , notamment qu'il soit plus intuitif pour l'utilisateur, des couleurs plus conviviales.
* Implementer un login sur l'application.
* Ajouter https au site web afin de rendre un transfert de données crypté ,on peut envisager implementer sur le serveur un certificat signé  issu d'un PKI de confience.
* Déployer l'application sur un docker container et diviser les differents services utilisés.
* Validation du formulaire (e.g la date)
