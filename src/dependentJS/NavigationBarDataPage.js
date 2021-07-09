import React from 'react';
import '../css/bootstrap.min.css';
import '../css/navigationBar.css';
import {Link} from "react-router-dom";

class NavigationBarDataPage extends React.Component {
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
                        <Link to="/">
                            <button className="btn btn-info " id="getDataBtn" type="submit">Get Mapping</button>
                        </Link>

                        <button className="btn btn-info "type="submit"><a className="App-link" href="http://localhost:9095/logout" id={"logout"} target="_self" rel="noopener noreferrer">Logout</a></button>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavigationBarDataPage;