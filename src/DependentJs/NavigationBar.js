import React from 'react';
import '../css/bootstrap.min.css';
import '../css/navigationBar.css';
import {Link} from "react-router-dom";

class NavigationBar extends React.Component {
    logoutHandle=e=>{
        sessionStorage.setItem("userId",null);
        sessionStorage.clear();
        alert("Log Out Successful");
    }
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
                        <Link to="/">
                        <button className="btn btn-info " type="submit" onClick={this.logoutHandle}>
                            Logout
                        </button></Link>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavigationBar;