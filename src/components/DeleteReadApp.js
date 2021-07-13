import React from "react";
import "../css/deletereadApp.css"
import UserService from "../services/UserService";
class DeleteReadApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid:'',
            action: 'Read'
        };
        this.readAllMapping = this.readAllMapping.bind(this);
    }
    readAllMapping(){
        let viewdata=document.getElementById("viewdata");

        let url="http://localhost:9095/userMappings/GetAllUserMappings";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin","http://localhost:3000/")
        xhr.send(null);
        console.log(xhr.status);
        if (xhr.status===200){
            console.log(xhr.responseText);
            //alert(xhr.responseText);
            // eslint-disable-next-line no-undef
            viewdata.innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
        }
    }
    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    DeleteReadMapping = e => {
        e.preventDefault();
        console.log(this.state);
        let userId = localStorage.getItem("userId");
        //let userId = this.state.userid;
        let action = this.state.action;
        console.log(userId);
        let xhr = new XMLHttpRequest();
        if (action === "delete") {
            let xhr = new XMLHttpRequest();
            let url = 'http://localhost:9095/userMappings/DeleteUserMappings/'+userId;
            xhr.open("GET", url, false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(null);
            console.log(xhr.status);
            if (xhr.status===200){
                console.log(xhr.responseText);
                alert("deleted"+xhr.responseText);
                // eslint-disable-next-line no-undef
                viewdata.innerHTML = " ";//JSON.stringify(JSON.parse(xhr.responseText), null, 4);
            }
        }
        else if (action === "Read") {
            let xhr = new XMLHttpRequest();
            let url = 'http://localhost:9095/userMappings/GetUserMapping/'+userId;
            xhr.open("GET", url, false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.setRequestHeader("Access-Control-Allow-Origin","*");
            xhr.send(null);
            console.log(xhr.status);
            if (xhr.status===200){
                console.log(xhr.responseText);
                //alert(xhr.responseText);
                // eslint-disable-next-line no-undef
                viewdata.innerHTML=xhr.responseText;
                viewdata.innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
            }
        }
    }
    render() {

        return (

            <div className="card jumbotron readMapping float-right my-sm-auto" id={"deleteRead"}>
                <label className="card-title font-weight-bold" id={"body2-title"}>DELETE /READ MAPPING</label>
                <div className={"card-body"}>
                    {/*<label>User ID: </label>*/}
                    {/*<label><input type="text" id="userId" name={"userid"} onChange={this.changeHandler}/></label>*/}
                    <button type="submit" className="btn btn-secondary" id="allbutton"
                            onClick={this.readAllMapping}>Get All Users
                    </button><br />
                    <label htmlFor="deleteReadActions">Choose to delete/read:</label>
                    <select id="deleteReadActions" name="action" onChange={this.changeHandler}>
                        <option value="read">Read</option>
                        <option value="delete">delete</option>
                    </select>
                    <button type="submit" className={"btn btn-secondary"} id={"submitButton"} onClick={this.DeleteReadMapping}>SUBMIT
                    </button>
                    <pre id="viewdata">requested Data</pre>
                </div>
            </div>

        )
    }
}
export default DeleteReadApp;