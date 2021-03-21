import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';
import App from './components/App/App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './index.scss';


render(
    <ErrorBoundary>
        <Provider store={store}>
            <Router basename="/TestTaskOShtuka/">
                <App />
            </Router>
        </Provider>
    </ErrorBoundary>,
    document.getElementById('root'),
);