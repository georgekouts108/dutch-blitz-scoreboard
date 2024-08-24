import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/playerInfoPage.css'
import { cardSymbols } from "../assets/card_symbols/card_symbols";

function getColor(card_symbol_id) {
    switch (card_symbol_id + 1) {
        case 1: return "yellow";
        case 2: return "#42b0ff";
        case 3: return "#ff3838";
        case 4: return "#42b0ff";
        case 5: return "#11ff00";
        case 6: return "#ff3838";
        case 7: return "yellow";
        case 8: return "#11ff00";
        case 9: return "#214eff";
        case 10: return "orange";
        case 11: return "#ff4afc";
        case 12: return "#9029ff";

    }
}

function IconPicker(props) {
    const navigate = useNavigate();
    const location = useLocation();
    let color = getColor(props._index);
    return (
        <>
            <div className="icon-card" style={{border:("1px solid " + color)}}>
                <img className="player-icon-2" src={cardSymbols[props._index]} alt="hhh" height={150} width={150}/>
                <input className="text-box" style={{color:color}} id={"playerNameID_"+(props._index)}
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