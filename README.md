## Basé sur le projet 

Ce dépot correspond au build du package suivant : https://github.com/aws-amplify/amplify-cli/tree/master/packages/amplify-appsync-simulator
(On utilise le dossier buildé /lib en tant que dépendance)

## Changement 

La seule différence avec le package original est que celui-ci apporte les modifications de la PR https://github.com/aws-amplify/amplify-cli/pull/5965 afin de prendre en charge le support BatchGetItem dans appsync-simulator pour les requêtes DynamoDB

Ce package est utilisé en dépendance du package serverless-appsync-simulator 
