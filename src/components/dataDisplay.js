import "./dataDisplay.css"
import React from 'react';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



function dataDisplay(props) {
    return(
        <div className="container data_box">
            <div className="row">
                <div className="col col-6 text-start">
                    <p className="hName">{props.name}</p>
                    <p>{props.type}</p>
                </div>    
                <div className="col col-6">
                    <div className="row">
                        <div className="col col-4">
                            <p>Total</p>
                        </div>
                        <div className="col col-4">
                            <p className="vacant">Vacant</p>
                        </div>
                        <div className="col col-4">
                            <p className="occupied">Occupied</p>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col col-4">
                            <p>{props.total}</p>
                        </div>
                        <div className="col col-4">
                            <p className="vacant">{props.vacant}</p>
                        </div>
                        <div className="col col-4">
                            <p className="occupied">{props.occupied}</p>
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

export default dataDisplay;