import React from 'react';
import './css/bootstrap.min.css';
import './css/App2.css';
import AddUpdateApp from "./components/AddUpdateApp";
import NavigationBar from "./components/NavigationBar";
import DeleteReadApp from "./components/DeleteReadApp";

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
