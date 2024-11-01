# Application de Recherche Documentaire

Cette application permet aux utilisateurs de rechercher des documents à l'aide d'une API externe. Elle comprend une barre de recherche où les utilisateurs peuvent saisir une requête, un bouton "Rechercher" pour soumettre la requête, et une section pour afficher les résultats de recherche. Les résultats incluent le temps d'exécution, le nombre total de résultats et les détails des résultats récupérés.

## Fonctionnalités

- Barre de recherche pour entrer une requête.
- Bouton "Rechercher" qui déclenche une recherche en utilisant une API externe.
- Affichage des résultats de recherche, y compris :
  - Temps d'exécution de la recherche
  - Nombre total de résultats
  - Détails de chaque résultat sous forme de JSON

## Prérequis

Assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [Vite](https://vitejs.dev/) pour le développement de l'application

## Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/Miracuchi/search-api-front.git
cd your-repo
```

2. Installer les dépendances :

```bash
npm install
```

3. Configurez vos variables d'environnement :

Créez un fichier .env à la racine du projet et ajoutez vos clés API comme suit :

VITE_PUBLIC_TOKEN_URL=your_token_url
VITE_PUBLIC_API_URL=your_api_url
VITE_PUBLIC_SEARCH_ENGINE_ID=your_search_engine_id

## Lancement de l'application

Pour démarrer l'application en mode développement, exécutez la commande suivante :

```bash
npm run dev
```

Accédez à l'application à l'adresse suivante : http://localhost:3000 (ou le port spécifié dans le terminal).
