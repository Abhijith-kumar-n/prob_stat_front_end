import React from 'react';
import './bootstrap.min.css';
import NavigationBarDataPage from "./NavigationBarDataPage";
import DataPageInput from "./DataPageInput";
function readData(){
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
