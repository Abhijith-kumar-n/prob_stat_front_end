import React from "react";
import "../../../css/bootstrap.min.css";
import "../css/MasterJsonBody.css";
import {MASTER_JSON_MESSAGES} from "../../../consts/masterjsonbody";
import Api from "../../../services/api";
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
    PostMapOnChange=e=> {

        const mapping = document.getElementById("MappingInput").value;
        let map = JSON.parse(mapping);
        map.orderId = parseInt(sessionStorage.getItem(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_STORAGE_ORDERID_KEY));

            if (map.orderId === undefined) {
                alert(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_ORDERID_UNDEFINED_ERROR)
            } else {
                let maps = {
                    "orderId": map.orderId,
                    "masterJson": JSON.stringify(map)
                }
                Api.Post(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_ADD_MASTER_API_URL, maps).then(response => {
                if (response.status === 200) {
                    if (response.data === "Present") {
                        var tenure = prompt(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_PROMPT_MSG_ON_DUPLICATE_ORDERID);
                        console.log("prompt---->", tenure);
                        if (tenure != null) {
                            sessionStorage.setItem(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_STORAGE_ORDERID_KEY, tenure);


                            this.PostMapOnChange();
                        }

                    } else {

                        alert(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_POST_SUCCESSFUL);
                    }

                } else if (response.status === 404) {
                    alert(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_ERROR_404);

                } else if (response.status === 500) {
                    alert(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_ERROR_500);
                }
            })
        }
    }
        PostMapping=e=>{
        e.preventDefault();
        const mapping = document.getElementById("MappingInput").value;
        let map=JSON.parse(mapping);
        console.log(map);
        console.log(map.orderId);
        if(map.orderId===undefined)
        {
            alert(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_ORDERID_UNDEFINED_ERROR)
        }
        else {
            let maps = {
                "orderId": map.orderId,
                "masterJson": mapping
            }

        Api.Post(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_ADD_MASTER_API_URL,maps).then(response =>{
            if (response.status === 200) {
                if (response.data==="Present")
                {
                    var tenure = prompt(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_PROMPT_MSG_ON_DUPLICATE_ORDERID);
                    console.log(tenure);
                    if (tenure != null) {
                        sessionStorage.setItem(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_STORAGE_ORDERID_KEY,tenure);
                        this.PostMapOnChange();
                    }

                }
                else {

                    alert(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_POST_SUCCESSFUL);
                }

            } else if (response.status === 404) {
                alert(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_ERROR_404);
            } else if (response.status === 500) {
                alert(MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_ERROR_500);
            }
        })

        }
    }

    render(){
        return(
            <div className="card text-md-right">
                <div>
                    <h2>Add Master Json Data</h2>
                    <textarea id={"MappingInput"} name={"masterJson"} onChange={this.ChangeHandler}required></textarea><br/>
                    <label><button type={"submit"} className={"btn btn-primary"} id={"postBtn"} onClick={this.PostMapping}>{MASTER_JSON_MESSAGES.MASTER_JSON_PAGE_POST_BUTTON}</button></label>
                </div>
            </div>
        );
    }
}

export default MasterJsonBody;