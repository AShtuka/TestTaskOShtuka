import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';
import App from './components/App/App';

import './index.scss';

render(
    <Provider store={store}>
        <Router basename="/TestTaskOShtuka/">
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);