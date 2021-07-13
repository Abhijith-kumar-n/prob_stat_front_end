import React from "react";
import "../css/bootstrap.min.css";
import "../css/MasterJsonBody.css";

class MasterJsonBody extends React.Component {

    constructor(props){
        super(props);
        this.state={
            masterJson:''
        }
    }

    ChangeHandler=event=>{
        this.setState({[event.target.name]: event.target.value})
}
    PostMapping=e=>{
        e.preventDefault();
        const mapping = document.getElementById("MappingInput").value;
        let map=JSON.parse(mapping);
        console.log(map);
        console.log(map.orderId);
        if(map.orderId===undefined)
        {
            alert("Required OrderId*. NOT FOUND")
        }
        else {
            let maps = {
                "orderId": map.orderId,
                "masterJson": mapping
            }
            let xhr = new XMLHttpRequest();
            let url = 'http://localhost:9095/Master/AddMaster';
            xhr.open("POST", url, false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify(maps));
            console.log(xhr.getAllResponseHeaders());
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                alert("Added Master Successfully!!!");

            } else if (xhr.status === 404) {
                alert("Not Found");
            } else if (xhr.status === 500) {
                alert("Internal Error");
            }
        }
    }
    render(){
        return(
            <div className="card text-md-right">
                <div>
                    <h2>Add Master Json Data</h2>
                    <textarea id={"MappingInput"} name={"masterJson"} onChange={this.ChangeHandler}required></textarea><br/>
                    <label><button type={"submit"} className={"btn btn-primary"} id={"postBtn"} onClick={this.PostMapping}>POST</button></label>
                </div>
            </div>
        );
    }
}

export default MasterJsonBody;