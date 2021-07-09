import React from "react";
import "../css/bootstrap.min.css";
import "../css/MasterJsonBody.css";

class MasterJsonBody extends React.Component {

    PostMapping=e=>{
        e.preventDefault();
        const mapping = document.getElementById("MappingInput").value;
        let xhr = new XMLHttpRequest();
        let url = 'http://localhost:9095/mappedData/takeinput';
        xhr.open("POST", url, false);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(mapping);
        console.log(xhr.getAllResponseHeaders());
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            alert(xhr.responseText);

        }
        else if (xhr.status === 404){
            alert("Not Found");
        }
        else if (xhr.status===500){
            alert("Internal Error");
        }
    }
    render(){
        return(
            <div className="card text-md-right">
                <div>
                    <h2>Add Master Json Data</h2>
                    <textarea id={"MappingInput"} required></textarea><br/>
                    <label><button type={"submit"} className={"btn btn-primary"} id={"postBtn"} onClick={this.PostMapping}>POST</button></label>
                </div>
            </div>
        );
    }
}

export default MasterJsonBody;