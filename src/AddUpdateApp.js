import React from "react";
import "./readAllMapping.css"
class AddUpdateApp extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            mapping: '',
            action: 'add'
        };
    }

    changeHandlerAddUpdate = event => {
        this.setState({[event.target.name]: JSON.stringify(event.target.value)})
    }
    addUpdateMapping = e => {
        e.preventDefault();
        let mapping = JSON.parse(this.state.mapping);
        console.log(mapping);
        let action = this.state.action;
        console.log(action);
        let xhr = new XMLHttpRequest();
        console.log(action.toString(),"\""+"add"+"\"")
        if ((action.toString()==="\""+"add"+"\"")||(action.toString()==="add")) {
            console.log("in Add!!!!!")
            let url = 'http://localhost:9098/mapping/addMapping';
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(mapping);
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                alert(xhr.responseText);
            }

        }
        else if (action ==="\""+"update"+"\"") {
            console.log("In Update!!!!!!")
            let url = 'http://localhost:9098/mapping/updateMapping';
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(mapping);
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