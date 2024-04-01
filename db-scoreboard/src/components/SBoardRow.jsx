import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Ranks } from "../assets/ranks";
import { cardSymbols } from "../assets/card_symbols/card_symbols";

function SBoardRow(props) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <div>
                <p>{props.p_rank} Place ~~ <img src={cardSymbols[props.p_id]} alt="hhh" height={50} width={50}/> ~~ {props.p_name} ~~ {props.p_grandTotal} Points  </p>
            </div>
        </>
    )
}
export default SBoardRow;