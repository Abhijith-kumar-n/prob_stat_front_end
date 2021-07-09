import React, {Component} from 'react';
import "../css/DataPageInput.css"

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
    getMappedData=event =>{
        event.preventDefault();
        let master=this.state.masterid;
        var user=this.state.userid;
        console.log(master,user);
        let xhr = new XMLHttpRequest();
        let url = 'http://localhost:9095/userMappings/mapOrdersToMappings/';

        xhr.open("GET", url + master+"/"+user, false);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(null);
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            // eslint-disable-next-line no-undef
            viewdata.innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
        }
        else if (xhr.status === 404){
            alert("Invalid Data Provided");
        }
        else if(xhr.status === 403){
            alert("Your Unauthorized")
        }
    }
    getMasterData=event=>{
        event.preventDefault();
        let master=this.state.masterid;
        console.log(master);
        let xhr = new XMLHttpRequest();
        let url = 'http://localhost:9095/Master/FindMaster/';

        xhr.open("GET", url+master, false);
        xhr.send(null);
        if (xhr.status===200){
            console.log(xhr.responseText);
            // eslint-disable-next-line no-undef
            viewdata.innerHTML =JSON.stringify(JSON.parse(xhr.responseText),null,4);
        }
        else if(xhr.status === 404){
            alert("Invalid OrderID");
        }
        else if(xhr.status === 403){
            alert("Your Unauthorized")
        }
    }
    render(){
        return (
            <div className=" card getdata text-center" >
                <label className={"card-title font-weight-bolder"}>GET MAPPED DATA</label>
                <div className={"card-body"}>
                    <label >Enter Mapping ID : </label>
                    <label for="masterid"><input type="text" id="masterid" name="masterid" onChange={this.changeHandler} required /></label>
                    <label >Enter User ID : </label>
                    <label for="userid"><input type="text" id="userid" name="userid" onChange={this.changeHandler} /></label>
                    <button type="submit" className={"btn btn-secondary"} id={"mappedDataid"} onClick={this.getMappedData}>GET MAPPED DATA</button>
                    <button type="submit" className={"btn btn-secondary"} id={"masterDataid"} onClick={this.getMasterData}>GET MASTER JSON</button>
                </div>
                <pre className={"align-center text-left"} id="viewdata">requested Data</pre>
            </div>
        )
    }
}
export default DataPageInput;