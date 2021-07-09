import React from 'react';
import './css/bootstrap.min.css';
import NavigationBarDataPage from "./dependentJS/NavigationBarDataPage";
import DataPageInput from "./dependentJS/DataPageInput";
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
