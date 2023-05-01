import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/App.css';
import './style/index.css';
import App from './App';
import axios from 'axios';

import { store } from './storage/store';
import { Provider } from 'react-redux'


axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'

axios.interceptors.request.use(async (config) => {
    config.headers.MyCustomField = 'foobar';
    return config;
}, async (error) => {
    throw error;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);