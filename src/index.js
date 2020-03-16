import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Abunt from './Abunt';
import Menu from './Menu';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Menu />
        <Switch>
            <Route path="/" exact={true} component={App}/>
            <Route path="/Abunt" component={Abunt} />
        </Switch>
    </BrowserRouter>,document.getElementById('root'));

serviceWorker.unregister();