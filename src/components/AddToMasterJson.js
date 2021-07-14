import '../css/bootstrap.min.css';
import NavigationBar from "../DependentJs/NavigationBar";
import MasterJsonBody from "../DependentJs/MasterJsonBody";


function AddToMasterJson(){
    return (
        <div>
            <NavigationBar/>
            <MasterJsonBody />
        </div>
    )
}

export default AddToMasterJson;