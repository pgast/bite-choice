import ReactDOM from 'react-dom';
import React from 'react';

import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './Store';
import App from './App';
import './index.css';

ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById('root'));

serviceWorker.unregister();
