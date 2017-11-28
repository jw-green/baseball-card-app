import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Card from './components/Card.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Card/>, document.getElementById('root'));

registerServiceWorker();
