import React from 'react';
import '../../../css/bootstrap.min.css';
import '../../../css/navigationBar.css';
import {Link} from "react-router-dom";
import {NAVIGATION_MESSAGES} from "../../../consts/navigation";

class NavigationBarDataPage extends React.Component {
    logoutHandle=e=>{
        sessionStorage.clear();
        alert(NAVIGATION_MESSAGES.NAVIGATION_BAR_LOGOUT_MESSAGE);
    }
    render() {
        return (
            <div>
                <nav className={"navbar bg-light"}>
                    <div>
                        <a className="navbar-brand text-dark font-weight-bold">{NAVIGATION_MESSAGES.NAVIGATION_BAR_ADD_MASTER_PAGE_TITLE}</a>
                    </div>
                    <div>
                        <Link to="/Mapping">
                            <button className="btn btn-info " id="getDataBtn" type="submit">{NAVIGATION_MESSAGES.NAVIGATION_BAR_TO_MAPPING_PAGE}</button>
                        </Link>

                        <Link to="/">
                            <button className="btn btn-info " type="submit" onClick={this.LogoutHandle}>
                                {NAVIGATION_MESSAGES.NAVIGATION_BAR_LOGOUT}
                            </button></Link>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavigationBarDataPage;