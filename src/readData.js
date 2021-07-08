import React from 'react';
import './bootstrap.min.css';
import NavigationBarDataPage from "./NavigationBarDataPage";
import DataPageInput from "./DataPageInput";
function readData(){
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
            <NavigationBarDataPage />
            <div id={"bodyclass"}>

                <DataPageInput />

            </div>
        </div>
    )
}
export default readData;
