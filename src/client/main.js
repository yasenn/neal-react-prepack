import './assets/css/font-awesome.css';
import './assets/css/app.css';
import './assets/css/neal-react.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getRoutes from './routes/routes.js';
import storeManager from './store/storeManager.js';

const routes = getRoutes();
const store = storeManager();

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('content')
);
