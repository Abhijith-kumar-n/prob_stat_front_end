import React from "react";
import "../css/AddUpdateApp.css"
import Api from "../../../services/api"
import {ADD_UPDATE_MESSAGES} from "../../../consts/addupdateapp";

class AddUpdateApp extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            userid:'',
            mapping: '',
            action: 'add'
        };
    }

    changeHandlerAddUpdate = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    addUpdateMapping = e => {
        e.preventDefault();
        let mapping = this.state.mapping;
        let action = this.state.action;
        let map={
            "userId":sessionStorage.getItem("userId"),
            "mapping":this.state.mapping
        }
        console.log(map);
        let xhr = new XMLHttpRequest();
        console.log(action.toString(),"\""+"add"+"\"")
        if ((action.toString()==="\""+"add"+"\"")||(action.toString()==="add")) {
            Api.Post(ADD_UPDATE_MESSAGES.ADD_UPDATE_PAGE_ADD_API_URL,JSON.stringify(map)).then(response => {
                    if (response.status === 200) {
                        alert(JSON.stringify(response.data));
                    }
                }
            )

        }
        else if ((action.toString() ==="\""+"update"+"\"")||(action.toString()==="update")) {
            Api.Post(ADD_UPDATE_MESSAGES.ADD_UPDATE_PAGE_UPDATE_API_URL,JSON.stringify(map)).then(response => {
                    if (response.status === 200) {
                        alert(JSON.stringify(response.data));
                    }
                }
            )
        }
    }
    render() {

        return (

                <div className="card jumbotron card-columns d-flex float-left addMapping" id={"addUpdateMapping"}>
                    <div className="card-title font-weight-bolder">
                        <label id={"body1-title"}>{ADD_UPDATE_MESSAGES.ADD_UPDATE_PAGE_TITLE}</label>
                    </div>
                    <div className="card-body ">
                        <textarea name="mapping" id="mapping" onChange={this.changeHandlerAddUpdate}></textarea><br/>
                        <label htmlFor="addUpdateActions">{ADD_UPDATE_MESSAGES.ADD_UPDATE_PAGE_CHOOSE}</label>
                        <select className="float-right" id="addUpdateActions" name="action"
                                onChange={this.changeHandlerAddUpdate}>
                            <option value="add">{ADD_UPDATE_MESSAGES.ADD_UPDATE_PAGE_ADD_OPTION}</option>
                            <option value="update">{ADD_UPDATE_MESSAGES.ADD_UPDATE_PAGE_UPDATE_OPTION}</option>
                        </select><br/>
                        <button type="submit" className="btn btn-block btn-secondary"
                                onClick={this.addUpdateMapping}>{ADD_UPDATE_MESSAGES.ADD_UPDATE_PAGE_SUBMIT_BUTTON}
                        </button>
                    </div>
                </div>

        )
    }
}
export default AddUpdateApp;