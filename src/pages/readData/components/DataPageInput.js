import React, {Component} from 'react';
import "./DataPageInput.css"
import {MASTER_MAPPING_MESSAGES} from "../../../consts/readData";
import Api from "../../../services/api";
class DataPageInput extends Component {
    constructor(props){
        super(props);
        this.state={
            masterid:0,
            userid:0
        }

    }
    changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value});
    }
    CheckStatus=e=>{
        {
            if (e.status === 200) {
                document.getElementById("viewdata").innerHTML = JSON.stringify(e.data, null, 4);
            } else if (e.status === 404) {
                alert(MASTER_MAPPING_MESSAGES.MASTER_MAPPING_PAGE_ERROR_404);
            } else if (e.status === 403) {
                alert(MASTER_MAPPING_MESSAGES.MASTER_MAPPING_PAGE_ERROR_403);
            }
        }
    }
    getMappedData=event =>{
        event.preventDefault();
        let master=this.state.masterid;
        let user=sessionStorage.getItem("userId");
        Api.Get(MASTER_MAPPING_MESSAGES.MASTER_MAPPING_PAGE_MAP_MASTER_API_URL+master+"/"+user).then(response=>
            this.CheckStatus(response)
        )
    }
    getMasterData=event=>{
        event.preventDefault();
        let master=this.state.masterid;
        Api.Get(MASTER_MAPPING_MESSAGES.MASTER_MAPPING_PAGE_MASTER_DATA_API_URL+master).then(response=> this.CheckStatus(response))
    }
    render(){
        return (
            <div className=" card getdata text-center" >
                <label className={"card-title font-weight-bolder"}>{MASTER_MAPPING_MESSAGES.MASTER_MAPPING_PAGE_TITLE}</label>
                <div className={"card-body"}>
                    <label >{MASTER_MAPPING_MESSAGES.MASTER_MAPPING_PAGE_MASTER_INPUT_LABEL}</label>
                    <label for="masterid"><input type="text" id="masterid" name="masterid" onChange={this.changeHandler} required /></label>
                    <button type="submit" className={"btn btn-secondary"} id={"mappedDataid"} onClick={this.getMappedData}>{MASTER_MAPPING_MESSAGES.MASTER_MAPPING_PAGE_MAP_BUTTON}</button>
                    <button type="submit" className={"btn btn-secondary"} id={"masterDataid"} onClick={this.getMasterData}>{MASTER_MAPPING_MESSAGES.MASTER_MAPPING_PAGE_MASTER_BUTTON}</button>
                </div>
                <pre className={"align-center text-left"} id="viewdata">{MASTER_MAPPING_MESSAGES.MASTER_MAPPING_PAGE_INIT_MESSAGE}</pre>
            </div>
        )
    }
}
export default DataPageInput;