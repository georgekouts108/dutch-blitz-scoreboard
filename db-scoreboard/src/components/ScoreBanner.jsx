import React from "react";
import '../styles/scoreBanner.css'
import { cardSymbols } from "../assets/card_symbols/card_symbols";
import { rankIcons } from "../assets/rank_images/ranks";

function ScoreBanner(props) {
    let rank_str = props.p_rank+""
    let rank_index = parseInt(rank_str.substring(0, rank_str.length-2)) - 1
    
    let border = "1px solid " + (rank_index === 0 ? "#d79a0b" : "#ffffffb4");
    let box_shadow = "5px 5px 5px " + (rank_index === 0 ? "#d79a0b" : "#ffffffb4");
    let bg_color = (rank_index === 0 ? "#ffd69459" : "")
    return (
        <div className="score-banner" style={{border:border, boxShadow:box_shadow,backgroundColor:bg_color}}>
            <img className="rank-logo" src={rankIcons[rank_index]} alt="icon"></img>
            <img className="player-icon" src={cardSymbols[props.p_id]} alt="icon"></img>
            <h1 className="player-name">{props.p_name}</h1>
            <h2 className="player-points">{props.p_grandTotal} Points</h2>
        </div>
    )
}

export default ScoreBanner;
