import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';
import App from './components/App/App';

import './index.scss';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);