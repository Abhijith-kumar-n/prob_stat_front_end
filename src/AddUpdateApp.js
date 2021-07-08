import React from "react";
import "./AddUpdateApp.css"
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
        console.log(this.state.userid);
        let mapping = this.state.mapping;
        console.log(mapping);
        let action = this.state.action;
        console.log(action);
        let map={
            "userId":this.state.userid,
            "mapping":this.state.mapping
        }
        console.log(map);
        let xhr = new XMLHttpRequest();
        console.log(action.toString(),"\""+"add"+"\"")
        if ((action.toString()==="\""+"add"+"\"")||(action.toString()==="add")) {
            console.log("in Add!!!!!")
            let url = 'http://localhost:9095/userMappings/AddMapping';
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.setRequestHeader("Access-Control-Allow-Origin","*");
            console.log("str --> "+JSON.stringify(map));
            xhr.send(JSON.stringify(map));

            if (xhr.status === 200) {
                console.log(xhr.responseText);
                alert(xhr.responseText);
            }

        }
        else if ((action.toString() ==="\""+"update"+"\"")||(action.toString()==="update")) {
            console.log("In Update!!!!!!")
            let url = 'http://localhost:9095/userMappings/UpdateMapping';
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify(map));
            console.log("Update --> "+JSON.stringify(map));
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                alert(xhr.responseText);

            }
        }
    }
    render() {

        return (

                <div className="card jumbotron card-columns d-flex float-left addMapping" id={"addUpdateMapping"}>
                    <div className="card-title font-weight-bolder">
                        <label id={"body1-title"}>ADD / UPDATE MAPPING</label>
                    </div>
                    <div className="card-body ">
                        <label>User ID: </label>
                        <label><input type="text" id="userId" name={"userid"} onChange={this.changeHandlerAddUpdate}/></label>
                        <textarea name="mapping" id="mapping" onChange={this.changeHandlerAddUpdate}></textarea><br/>
                        <label htmlFor="addUpdateActions">Choose to add/update:</label>
                        <select className="float-right" id="addUpdateActions" name="action"
                                onChange={this.changeHandlerAddUpdate}>
                            <option value="add">Add</option>
                            <option value="update">Update</option>
                        </select><br/>
                        <button type="submit" className="btn btn-block btn-secondary"
                                onClick={this.addUpdateMapping}>ALTER
                        </button>
                    </div>
                </div>

        )
    }
}
export default AddUpdateApp;