import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/playerInfoPage.css'
import { cardSymbols } from "../assets/card_symbols/card_symbols";

function IconPicker(props) {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className="icon-card">
                <img className="player-icon-2" src={cardSymbols[props._index]} alt="hhh" height={150} width={150}/>
                <input className="text-box" id={"playerNameID_"+(props._index)}
                    type="text" 
                    value={props._value} 
                    onChange={(e) =>props.onInputChange(props._index, e.target.value)}
                    placeholder={"Your Name"} 
                />
            </div>
        </>
    )
}
export default IconPicker;