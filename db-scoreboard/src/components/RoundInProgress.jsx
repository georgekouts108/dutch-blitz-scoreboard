import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { cardSymbols } from "../assets/card_symbols/card_symbols";

function RoundInProgress() {
    const navigate = useNavigate();
    const location = useLocation();

    const roundNum = location.state?.roundNumber;
    const players = location.state?.players;
    const [roundOver, setRoundOver] = useState(false)
    const [blitzerID, setBlitzerID] = useState(-1)
    
    const [secondsElapsed, setSecondsElapsed] = useState(0)

    useEffect(()=>{
        const interval = setInterval(() => {
            setSecondsElapsed(s => s + 1)
            if (roundOver) {
                clearInterval(interval)
                
            }  

        }, 1000)

        return () => clearInterval(interval);
    },[secondsElapsed])

    const finishRound = (blitzerID) => {
        setBlitzerID(blitzerID)
        console.log("that took "+secondsElapsed+" sec.")
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
                    time: secondsElapsed
                } 
            });
        }
        
    },[roundOver,blitzerID])

    return (
        <>
            <h1>Round {roundNum} in progress</h1>
                {secondsElapsed >= 60 && (<><h2>{Math.floor(secondsElapsed / 60) } min {(secondsElapsed%60 < 10 ? "0":"" )}{secondsElapsed % 60} sec  </h2></>)}
                {secondsElapsed < 60 && (<><h2>{(secondsElapsed%60 < 10 ? "0":"" )}{secondsElapsed} sec  </h2></>)}
                
            
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