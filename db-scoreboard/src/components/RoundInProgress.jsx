import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { cardSymbols } from "../assets/card_symbols/card_symbols";

function RoundInProgress() {
    const navigate = useNavigate();
    const location = useLocation();

    const roundNum = location.state?.roundNumber;
    const players = location.state?.players;
    const [roundOver, setRoundOver]=useState(false)
    const [blitzerID, setBlitzerID]=useState(-1)
    
    const finishRound = (blitzerID) => {
        setBlitzerID(blitzerID)
        setRoundOver(true);
    }
    useEffect(()=>{
        if (roundOver) {            
            for (let t = 0; t < players.length; t++) {
                players[t].blitzCount = (players[t].id === blitzerID ? players[t].blitzCount + 1 : players[t].blitzCount ) 
                players[t].blitzedCurrentRound = (players[t].id === blitzerID ? true :false);
            }
            
            navigate('/round-results', { 
                state: { 
                    roundNumber: roundNum,
                    players: players,
                    pointsToWin: location.state?.pointsToWin,
                } 
            });
        }
        
    },[roundOver,blitzerID])
    return (
        <>
            <h1>Round {roundNum} in progress</h1>
            <h3>a stopwatch will go here later</h3>
            <div>
                {
                    players.map((player) => (
                        <div key={player.id} className="row">
                            
                            <button onClick={() => finishRound(player.id)}>
                                {player.name}<br/><br/>
                                <img src={cardSymbols[player.id]} alt={player.id} height={60} width={60}/><br/><br/>
                                Blitz!
                            </button>
                            <br/><br/>
                        </div>
                    ))
                }
            </div>
        </>
    )    
}
export default RoundInProgress;