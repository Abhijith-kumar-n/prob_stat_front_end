import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App.js';

import {Index as Mapping} from './pages/Mappings/index';
import {Index as readData} from './pages/readData/index';
import {Index as ADDToMaster} from './pages/AddToMasterJson/index';

ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Mapping" component={Mapping}/>
            <Route path="/data" component={readData} />
            <Route path="/AddToMaster" component={ADDToMaster} />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

