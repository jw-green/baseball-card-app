# Baseball Cards React App

## Brief

Intended to be an effective way of displaying metrics on teams in the form of searchable summaries and baseball cards (à la [Bridgewater](https://goo.gl/gPfeRB)).

The app skeleton was generated with `create-react-app`.

## Structure

```plaintext
.
|-- README.md
|-- package-lock.json
|-- package.json
|-- public
|   |-- favicon.ico
|   |-- images
|   |   `-- trees.png
|   |-- index.html
|   `-- manifest.json
|-- src
|   |-- app
|   |   |-- Filter.js
|   |   |-- NavBar.js
|   |   `-- NavItem.js
|   |-- components
|   |   |-- Card.js
|   |   |-- CardBack.js
|   |   |-- CardFront.js
|   |   |-- CardList.js
|   |   |-- MBTI.js
|   |   |-- Metric.js
|   |   |-- Name.js
|   |   |-- PageTitle.js
|   |   |-- PolarGraph.js
|   |   |-- Portrait.js
|   |   |-- Subteam.js
|   |   `-- Team.js
|   |-- container
|   |   `-- App.js
|   |-- data
|   |   `-- index.js
|   |-- index.js
|   |-- registerServiceWorker.js
|   `-- styles
|       |-- card.css
|       |-- cardList.css
|       |-- index.css
|       |-- navbar.css
|       `-- pageTitle.css
`-- yarn.lock
```

## Setup

## Building

### Dev Builds

```plaintext
npm start
```

### Production Builds

For optimised, production builds:

```plaintext
yarn build
```