import ReactDOM from 'react-dom';
import React from 'react';

import { StoreProvider } from './Store';
import App from './App';
import './index.css';
import {Buffer} from 'buffer';
Buffer.from('anything','base64');

ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById('root'));
