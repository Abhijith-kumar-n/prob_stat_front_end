import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import reportWebVitals from './inBuilt/reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mappings from './Mappings';
import readData from './readData';
import AddToMasterJson from './AddToMasterJson';

ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Mappings} />
            <Route path="/data" component={readData} />
            <Route path="/AddToMaster" component={AddToMasterJson} />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root'),
  reportWebVitals(console.log)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
