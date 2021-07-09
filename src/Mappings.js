import React from 'react';
import './css/bootstrap.min.css';
import './css/App2.css';
import AddUpdateApp from "./dependentJS/AddUpdateApp";
import NavigationBar from "./dependentJS/NavigationBar";
import DeleteReadApp from "./dependentJS/DeleteReadApp";

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
