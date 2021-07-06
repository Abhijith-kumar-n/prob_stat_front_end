import React from 'react';
import './bootstrap.min.css';
import './App2.css';
import AddUpdateApp from "./AddUpdateApp";
import NavigationBar from "./NavigationBar";
import DeleteReadApp from "./DeleteReadApp";

function App(){
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
export default App;
