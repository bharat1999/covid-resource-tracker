import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function OxygenData(props){
    return (
        <div className="container data_box">
            <div className="row">
                <div className="col col-6 text-start">
                    <p className="hName">{props.name}</p>
                    <p>{props.type}</p>
                </div>    
                <div className="col col-6">
                    <div className="row">
                        <div className="col col-3">
                            <p>Total</p>
                        </div>
                        <div className="col col-3">
                            <p className="vacant">Vacant</p>
                        </div>
                        <div className="col col-3">
                            <p className="occupied">Occupied</p>
                        </div>
                        <div className="col col-3">
                            <p className="occupied">Oxygen Left</p>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="col col-3">
                            <p>{props.total}</p>
                        </div>
                        <div className="col col-3">
                            <p className="vacant">{props.vacant}</p>
                        </div>
                        <div className="col col-3">
                            <p className="occupied">{props.occupied}</p>
                        </div>
                        <div className="col col-3">
                            <p className="occupied">{props.left}</p>
                        </div>
                    </div>
                </div>    
            </div>
            <Popup trigger={<button className="btn btn-primary">More Info</button>} position="right center">
                <div>
                    <p>Add: {props.add}</p>
                    <p>Phone No: {props.no}</p> 
                    <a href={props.link} target="blank"><RoomOutlinedIcon/>Google Map</a>
                </div>
            </Popup>
        </div>
    )
}

export default OxygenData