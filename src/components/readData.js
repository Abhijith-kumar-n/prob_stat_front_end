import React from 'react';
import '../css/bootstrap.min.css';
import NavigationBarDataPage from "../DependentJs/NavigationBarDataPage";
import DataPageInput from "../DependentJs/DataPageInput";
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
