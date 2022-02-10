## Basé sur le projet 

Ce dépot correspond au build du package suivant : https://github.com/aws-amplify/amplify-cli/tree/master/packages/amplify-appsync-simulator
(On utilise le dossier buildé /lib en tant que dépendance)

## Changement 

Différence avec le package original est que celui-ci apporte les modifications : 

- de la PR https://github.com/aws-amplify/amplify-cli/pull/5965 afin de prendre en charge le support BatchGetItem dans appsync-simulator pour les requêtes DynamoDB
- de la prise en charge d'un objet contenant de multiple clés api et non seulement une afin de faire marcher notre implémentation des mutations et de la bridgeKey

Ce package est utilisé en dépendance du package serverless-appsync-simulator 
