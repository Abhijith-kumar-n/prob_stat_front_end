import React from 'react';
import '../../../css/bootstrap.min.css';
import '../../../css/navigationBar.css';
import {Link} from "react-router-dom";
import {NAVIGATION_MESSAGES} from "../../../consts/navigation";

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
                        <a className="navbar-brand text-dark font-weight-bold">{NAVIGATION_MESSAGES.NAVIGATION_BAR_MAPPING_PAGE_TITLE}</a>
                    </div>
                    <div>
                        <Link to="/data"><button className="btn btn-info " id="getDataBtn" type="submit">{NAVIGATION_MESSAGES.NAVIGATION_BAR_TO_DATA_PAGE}
                        </button></Link>
                        <Link to="/">
                        <button className="btn btn-info " type="submit" onClick={this.logoutHandle}>
                            {NAVIGATION_MESSAGES.NAVIGATION_BAR_LOGOUT}
                        </button></Link>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavigationBar;