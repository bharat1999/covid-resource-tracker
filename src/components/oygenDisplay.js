import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './oxygenDisplay.css'

function OxygenData(props){
    return (
        <div className={`container o2_box ${String(props.class)}`}>
            <div className="row">
                <div className="col col-6 text-start">
                    <p className="hName">{props.data.name}</p>
                    <p>{props.data.type}</p>
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
                            <div className="occupied">{props.left[props.data.name]==undefined?<div>NA</div>:<div>{parseInt(props.left[props.data.name].days,10)*24 + parseInt(props.left[props.data.name].hours,10)}  hours</div>}</div>
                        </div>
                    </div>
                </div>    
            </div>
            <Popup trigger={<button className="btn btn-primary popup-btn">More Info</button>} position="right center">
                <div>
                    <p>Add: {props.data.location.formattedAddress}</p>
                    <p>Phone No: {props.data.phoneNumber[0]}</p> 
                    <a href={props.data.location.link} target="blank"><RoomOutlinedIcon/>Google Map</a>
                </div>
            </Popup>
        </div>
    )
}

export default OxygenData