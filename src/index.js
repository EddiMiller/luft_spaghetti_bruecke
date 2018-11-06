import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import list from './reducers/index_reducers';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';


let store = createStore(list);

ReactDOM.render(
 
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact={true} path="/" component={App} />

            </div>
        </HashRouter>
    
    </Provider>,
    
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
