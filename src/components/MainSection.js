import React, { Component } from 'react'
import { Button } from './Button';
import './MainSection.css';
import '../App.css';


function MainSection(){
    return (
        <div className= 'main-container'>
 
 <video src="/video/forest.mp4" autoPlay loop muted /> 

        <h1>
            Take Action!
        </h1>
        <div className= "forest-btns">
        <Button className='btns' buttonStyle='btn--outline' 
        buttonSize='btn--large'>
            ADD HOURS
            </Button>

            <Button className='btns' buttonStyle='btn--primary' 
        buttonSize='btn--large' onClick={console.log('hey')}>
            OPPORTUNITIES
            </Button>
        </div>

      
        

        </div>
    )
}

export default MainSection;