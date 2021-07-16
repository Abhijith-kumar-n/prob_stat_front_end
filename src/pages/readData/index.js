import React from 'react';
import '../../css/bootstrap.min.css';
import NavigationBarDataPage from "../AddToMasterJson/components/NavigationBarDataPage";
import DataPageInput from "./components/DataPageInput";


export class Index extends React.Component{
    render(){
        return (
            <div >
                <NavigationBarDataPage />
                <div id={"bodyclass"}>

                    <DataPageInput />

                </div>
            </div>
        )}
}