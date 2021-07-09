import './css/bootstrap.min.css';
import NavigationBar from "./dependentJS/NavigationBar";
import MasterJsonBody from "./dependentJS/MasterJsonBody";


function AddToMasterJson(){
    return (
        <div>
            <NavigationBar/>
            <MasterJsonBody />
        </div>
    )
}

export default AddToMasterJson;