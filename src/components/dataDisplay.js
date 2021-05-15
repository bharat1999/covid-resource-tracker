import "./dataDisplay.css"
import React from 'react';





function dataDisplay(props) {
    return(
        <div className="container data_box">
            <div className="row">
                <div className="col col-8 text-start">
                    <p>{props.name}</p>
                    <p>{props.type}</p>
                    <p>{props.add}</p>
                    <p>{props.no}</p> 
                    <a href={props.link}>Map</a>
                </div>
                <div className="col col-4">
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
        </div>
    )
}

export default dataDisplay;