import React from 'react';
import dogImg from './piglet.jpg'; 
import './Piglet.scss';


function Piglet() {
    return (
        <div className="piglet-wrapper">
            <img src={dogImg} alt="piglet is cute" />
        </div>        
    )
}

export default Piglet;