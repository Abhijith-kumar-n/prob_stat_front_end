import './css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import MasterJsonBody from "./components/MasterJsonBody";


function AddToMasterJson(){
    return (
        <div>
            <NavigationBar/>
            <MasterJsonBody />
        </div>
    )
}

export default AddToMasterJson;