## Basé sur le projet 

Ce dépot correspond au build du package suivant : https://github.com/aws-amplify/amplify-cli/tree/master/packages/amplify-appsync-simulator
(On utilise le dossier buildé /lib en tant que dépendance)

## Changement 

Différence avec le package original est que celui-ci apporte les modifications : 

- de la PR https://github.com/aws-amplify/amplify-cli/pull/5965 afin de prendre en charge le support BatchGetItem dans appsync-simulator pour les requêtes DynamoDB
Commit : feat: add BatchGetItem to appsync-simulator(#5963)  
- de la prise en charge d'un objet contenant de multiple clés api et non seulement une afin de faire marcher notre implémentation des mutations et de la bridgeKey
Commit : 2fff8e51f05beca7db21d729422e738603e8e9a9

Ce package est utilisé en dépendance du package serverless-appsync-simulator 

## Mise à jour

Ce projet étant un sous package du projet amplify-cli, il est compliqué d'utiliser les fonctionnalitées de rebase/merge de git pour les forks.
Le plus simple est de récupérer la dernière version en lieu et place de ce dépot, et d'y réimplémenter les deux commits (peu de modifs)
