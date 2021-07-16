import '../../css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBarDataPage";
import MasterJsonBody from "./components/MasterJsonBody";
import React from 'react';


export class Index extends React.Component {
    render(){

        return (
            <div>
                <NavigationBar/>
                <MasterJsonBody />
            </div>

        )}
}

