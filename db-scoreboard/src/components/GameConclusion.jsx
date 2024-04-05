import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Ranks } from "../assets/ranks";
import SBoardRow from "./SBoardRow";

function GameConclusion() {
    const navigate = useNavigate();
    const location = useLocation();

    const players = location.state?.players;
    const pointsToWin = location.state?.pointsToWin;
    const roundsPlayed = location.state?.roundNumber;
    const championIDs = location.state?.championIDs;

    return (
        <>
            <h1>We have {(championIDs.length > 1) ? "winners" : "a winner" }!</h1>
            <div>
                {
                    players.map((player, index) => (
                        <div key={index} className="row">
                            {player.won && (<h3>WINNER:</h3>)}
                            <SBoardRow p_rank={player.rank} p_id={player.id} p_name={player.name} p_grandTotal={player.grandTotal} />
                        </div> 
                    ))
                    
                }<br></br>
            </div>
            <button>View Statistics</button>
            <button onClick={() => navigate('/')}>Go Home</button>
        </>
    )

}
export default GameConclusion;