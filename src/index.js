import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './container/App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
