# Baseball Cards React App

## Brief

Intended to be an effective way of displaying metrics on teams in the form of searchable summaries and baseball cards (à la [Bridgewater](https://goo.gl/gPfeRB)).

The app skeleton was generated with `create-react-app`.

## Structure

```plaintext
.
|-- ./README.md
|-- ./package-lock.json
|-- ./package.json
|-- ./public
|   |-- ./public/favicon.ico
|   |-- ./public/index.html
|   `-- ./public/manifest.json
|-- ./src
|   |-- ./src/app
|   |   |-- ./src/app/Filter.js
|   |   |-- ./src/app/NavBar.js
|   |   `-- ./src/app/NavItem.js
|   |-- ./src/components
|   |   |-- ./src/components/Card.js
|   |   |-- ./src/components/CardList.js
|   |   |-- ./src/components/Graph.js
|   |   |-- ./src/components/MBTI.js
|   |   |-- ./src/components/Metric.js
|   |   |-- ./src/components/Name.js
|   |   |-- ./src/components/Portrait.js
|   |   |-- ./src/components/Subteam.js
|   |   `-- ./src/components/Team.js
|   |-- ./src/container
|   |   `-- ./src/container/App.js
|   |-- ./src/data
|   |   `-- ./src/data/index.js
|   |-- ./src/index.js
|   |-- ./src/registerServiceWorker.js
|   `-- ./src/styles
|       `-- ./src/styles/index.css
`-- ./yarn.lock

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