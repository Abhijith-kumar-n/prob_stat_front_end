import React from 'react';
import './bootstrap.min.css';
import './NavigationBar.css';
import dataPage from "./readData"
import {Link} from "react-router-dom";

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <nav className={"navbar bg-light"}>
                    <div>
                        <a className="navbar-brand text-dark font-weight-bold">Customize Mapping</a>
                    </div>
                    <div>
                        <Link to="/data"><button className="btn btn-info " id="getDataBtn" type="submit">Get
                            Data
                        </button></Link>
                        <button className="btn btn-info " type="submit">
                            <a className="App-link" href="http://localhost:9095/logout" id={"logout-link"} target="_self" rel="noopener noreferrer">Logout</a>
                        </button>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavigationBar;