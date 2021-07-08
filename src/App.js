import React from 'react';
import './bootstrap.min.css';
import './App2.css';
import AddUpdateApp from "./AddUpdateApp";
import NavigationBar from "./NavigationBar";
import DeleteReadApp from "./DeleteReadApp";

function App(){
    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Access-Control-Allow-Origin" : "*",
            "Allow": "GET",
            "Content-type": "Application/json",
        }
    };
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
