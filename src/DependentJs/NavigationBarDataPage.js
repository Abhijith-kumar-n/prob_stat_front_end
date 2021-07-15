import React from 'react';
import '../css/bootstrap.min.css';
import '../css/navigationBar.css';
import {Link} from "react-router-dom";

class NavigationBarDataPage extends React.Component {
    logoutHandle=e=>{
        localStorage.setItem("userId",null);
        alert("Log Out Successful");
    }
    render() {
        return (
            <div>
                <nav className={"navbar bg-light"}>
                    <div>
                        <a className="navbar-brand text-dark font-weight-bold">Mapped Data</a>
                    </div>
                    <div>
                        <Link to="/AddToMaster">
                            <button className="btn btn-info " id="getMasterDataBtn" type="submit">ADD TO MASTER JSON</button>
                        </Link>
                        <Link to="/Mapping">
                            <button className="btn btn-info " id="getDataBtn" type="submit">Get Mapping</button>
                        </Link>

                        <Link to="/">
                            <button className="btn btn-info " type="submit" onClick={this.LogoutHandle}>
                                Logout
                            </button></Link>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavigationBarDataPage;