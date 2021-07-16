import React from "react";
import "../css/deletereadApp.css"
import {DELETE_READ_MESSAGES} from "../../../consts/deletereadapp";
import Api from "../../../services/api";

class DeleteReadApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action: 'read'
        };
    }
    changeHandler = event => {
        if (event.target.value==="delete"){
            document.getElementById("submitButton").innerHTML=DELETE_READ_MESSAGES.DELETE_READ_PAGE_SUBMIT_CHANGE_BUTTON;
        }
        else{
            document.getElementById("submitButton").innerHTML=DELETE_READ_MESSAGES.DELETE_READ_PAGE_SUBMIT_BUTTON;
        }
        this.setState({[event.target.name]: event.target.value})
    }
    DeleteReadMapping = e => {
        e.preventDefault();
        console.log(this.state);
        let userId = sessionStorage.getItem("userId");
        let action = this.state.action;
        console.log(userId);
        if (action === "delete") {
            Api.Get(DELETE_READ_MESSAGES.DELETE_READ_PAGE_DELETE_API_URL+userId).then(response => {
                if (response.status===200){
                    alert("deleted"+JSON.stringify(response.data));
                    // eslint-disable-next-line no-undef
                    viewdata.innerHTML = " ";
                }
                else if (response.status===400){
                    alert(DELETE_READ_MESSAGES.DELETE_READ_PAGE_USER_NOT_LOGGED_IN_MSG);
                }
            })

        }
        else if (action === "read") {
            Api.Get(DELETE_READ_MESSAGES.DELETE_READ_PAGE_READ_API_URL+userId).then(response => {
                if (response.status===200){
                    alert("deleted"+JSON.stringify(response.data));
                    // eslint-disable-next-line no-undef
                    viewdata.innerHTML = JSON.stringify(response.data,null,4);
                }
                else if (response.status===400){
                    alert(DELETE_READ_MESSAGES.DELETE_READ_PAGE_USER_NOT_LOGGED_IN_MSG);
                }
            })
        }
    }
    render() {

        return (

            <div className="card jumbotron readMapping float-right my-sm-auto" id={"deleteRead"}>
                <label className="card-title font-weight-bold" id={"body2-title"}>{DELETE_READ_MESSAGES.DELETE_READ_PAGE_TITLE}</label>
                <div className={"card-body"}>
                    <label htmlFor="deleteReadActions">{DELETE_READ_MESSAGES.DELETE_READ_PAGE_CHOOSE}</label>
                    <select id="deleteReadActions" name="action" onChange={this.changeHandler}>
                        <option value="read">{DELETE_READ_MESSAGES.DELETE_READ_PAGE_READ_OPTION}</option>
                        <option value="delete">{DELETE_READ_MESSAGES.DELETE_READ_PAGE_DELETE_OPTION}</option>
                    </select>
                    <button type="submit" className={"btn btn-secondary"} id={"submitButton"} onClick={this.DeleteReadMapping}>{DELETE_READ_MESSAGES.DELETE_READ_PAGE_SUBMIT_BUTTON}
                    </button>
                    <pre id="viewdata">{DELETE_READ_MESSAGES.DELETE_READ_PAGE_READ_DATA_INIT}</pre>
                </div>
            </div>

        )
    }
}
export default DeleteReadApp;