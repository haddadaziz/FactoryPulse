# FactoryPulse

Application web de suivi des machines d'un atelier de production. Elle permet de voir l'état des équipements, de les rechercher, de les modifier et d'en ajouter, à partir d'un fichier JSON local.

Projet étudiant. Pas de serveur ni de base de données : les données restent en mémoire le temps de la session.

## Fonctionnalités

- **Tableau de bord** (`/`) : nombre total de machines, machines en fonctionnement et machines en panne.
- **Liste des machines** (`/machines`) : cartes avec recherche par nom, filtre par statut, changement de statut et suppression après confirmation.
- **Ajout** (`/machines/new`) : formulaire avec contrôles (nom et zone obligatoires, production entière supérieure ou égale à zéro).
- **Kanban** (`/kanban`) : trois colonnes selon le statut, déplacement d'une machine par glisser-déposer.

Les indicateurs du tableau de bord sont recalculés à partir de la liste courante après chaque ajout, modification ou suppression.

## Lancer le projet

Prérequis : [Node.js](https://nodejs.org/).

```bash
npm install
npm run dev
```

Puis ouvrir l'adresse affichée dans le terminal (en général `http://localhost:5173`).

Autres commandes :

```bash
npm run build    # génère le dossier dist
npm run preview  # sert le build localement
npm run lint     # vérifie le code avec ESLint
```

## Données

Au chargement, l'application lit `public/machines.json` avec `fetch`. Les ajouts, modifications et suppressions ne changent que l'état React : un rechargement de la page remet les données d'origine.

Chaque machine a un identifiant, un nom, une zone, un statut (`En fonctionnement`, `À l'arrêt` ou `En Panne`) et une production journalière.

## Stack

- React
- React Router
- Vite

## Structure

```
public/machines.json          données initiales
src/App.jsx                   état partagé et routes
src/pages/                    tableau de bord, liste, ajout, kanban
src/components/               navigation, cartes, colonnes kanban
```
