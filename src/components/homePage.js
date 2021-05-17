import './homePage.css'
import React from 'react';

function homePage(props){
    return(
    <div>
        <section id ="hero">
            <div className="hero-container">
                <h1>Welcome to Covid Bed Tracker</h1>
                <h3 className="head">Let's Fight Together</h3>
            </div>
        </section>
        <section id="cases">
            <div className="container">
                <div className="section-header">
                    <h3 className="section-title">Covid-19 Cases</h3>
                </div>
                <div className="row counters">
                    <div className="col-3 text-center confirmed">
                      <p>Confirmed Cases</p>
                    </div>
                    <div className="col-3 text-center recovered">
                      <p>Recovered</p>
                    </div>
                    <div className="col-3 text-center active">
                      <p>Active Cases</p>
                    </div>
                    <div className="col-3 text-center death">
                       <p>Death Count</p>
                    </div>
                </div>
                <div className="row counters">
                    <div className="col-3 text-center confirmed">
                      <p>{props.data.confirmed}</p>
                    </div>
                    <div className="col-3 text-center recovered">
                      <p>{props.data.recovered}</p>
                    </div>
                    <div className="col-3 text-center active">
                      <p>{props.data.active}</p>
                    </div>
                    <div className="col-3 text-center death">
                       <p>{props.data.deaths}</p>
                    </div>
                </div>
                <div className="row counters">
                    <div className="col-3 text-center confirmed change">
                      <p>+{props.data.deltaconfirmed}</p>
                    </div>
                    <div className="col-3 text-center recovered change">
                      <p>+{props.data.deltarecovered}</p>
                    </div>
                    <div className="col-3 text-center ">
                      <p></p>
                    </div>
                    <div className="col-3 text-center death change">
                       <p>+{props.data.deltadeaths}</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="facilities">
            <div className="container">
                <div className="section-header">
                    <h3 className="section-title">Bed Availability</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="box">
                            <div className="icon"><a href="/icu"><i className="fas fa-procedures"></i></a></div>
                            <h4 className="title"><a href="/icu">ICU BEDS</a></h4>  
                            <p>Available Beds = {props.icutotal}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="box">
                          <div className="icon"><a href="/isolation"><i className="fas fa-bed"></i></a></div>
                          <h4 className="title"><a href="/isolation">ISOLATION BEDS</a></h4>
                          <p>Available Beds ={props.isototal}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="zoom-in">
                        <div className="box">
                          <div className="icon"><a href="/o2"><i className="fas fa-bed"></i></a></div>
                          <h4 className="title"><a href="/o2">OXYGEN BEDS</a></h4>
                          <p>Available Beds ={props.o2total}</p>
                        </div>
                      </div>
                </div>
            </div>
        </section>
    </div>   
    )
}

export default homePage