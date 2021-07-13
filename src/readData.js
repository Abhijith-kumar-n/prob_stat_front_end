import React from 'react';
import './css/bootstrap.min.css';
import NavigationBarDataPage from "./components/NavigationBarDataPage";
import DataPageInput from "./components/DataPageInput";
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
