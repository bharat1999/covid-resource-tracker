import React from 'react';
import './about.css'
import { Paper } from '@material-ui/core';

function About(){
    return(
    <div>
            <div class="container about">
            <Paper elevation={0} variant="outlined">
                <p class="question text-center">Why?</p>
                <p class="answer">We have created this webapp to help the citizens to get the vital information regarding resources that can be a currently a lifesaver for someone.Currently we are able to provide the data of Delhi state. But we are constantly working to add more states and also other resources info like oxygen cylinders,injections,etc.</p>
                <p class="question">1.Are you official?</p>
                <p class="answer">No.This is not a government project.</p> 
                <p class="question"> 2.What are your sources? How is the data gathered for this project?</p>
                <p class="answer">We are using state database for the bed information and covid19india API for case data.We are gathering all the data and showing it in a easy to understand and useful manner.</p>
                <p class="question">  4.Who are you?</p>
                <p class="answer">We are a group of dedicated student who are working on this project.</p>  
                <p class="question"> 5. Why are you guys putting in time and resources to do this while not gaining a single penny from it?</p>
                <p class="answer">Because it affects all of us. Today it's someone else who is getting infected; tomorrow it could be us. We need to prevent the spread of this virus. We need to document the data so that people with knowledge can use this data to make informed decisions.</p>
            </Paper>
            </div>
    </div>   
    
    )
}

export default About