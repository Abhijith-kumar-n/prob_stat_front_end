import React from 'react';
import '../css/bootstrap.min.css';
import '../css/App2.css';
import AddUpdateApp from "../DependentJs/AddUpdateApp";
import NavigationBar from "../DependentJs/NavigationBar";
import DeleteReadApp from "../DependentJs/DeleteReadApp";

function Mappings(){
    return (
        <div >
            <NavigationBar />
            <div id={"bodyclass"}>

                <AddUpdateApp />
                <DeleteReadApp />
            </div>
        </div>
    )
}
export default Mappings;
