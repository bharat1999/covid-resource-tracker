import "./dataDisplay.css"
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


function DataDisplay(props) {
    const ref = useRef();

    // {{backgroundColor:'#1e1e30'}}
    return(
        <div>
            <Flippy className={`container data_box ${String(props.class)}`} flipOnHover={false} flipOnClick={true} flipDirection="horizontal" ref={ref} >
                <FrontSide style={{ backgroundColor: 'white'}}>
                    <div className="row">
                        <div className="col col-6 text-start">
                                <p className="hName">{props.data.name}</p>
                                <p>{props.data.type}</p>
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
                    <button className="btn btn-primary">More Info</button>    
                </FrontSide>
                <BackSide style={{ backgroundColor: 'white'}}>
                    <div>
                        <p>Add: {props.data.location.formattedAddress}</p>
                        <p>Phone No: {props.data.phoneNumber[0]}</p> 
                        <a href={props.data.location.link} target="blank"><RoomOutlinedIcon/>Google Map</a>
                    </div>
                </BackSide>
            </Flippy>
        </div>
    )
}

export default DataDisplay;