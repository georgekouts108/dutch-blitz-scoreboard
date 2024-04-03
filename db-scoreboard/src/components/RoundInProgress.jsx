import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function RoundInProgress() {
    const navigate = useNavigate();
    const location = useLocation();

    const roundNum = location.state?.roundNumber;
    const players = location.state?.players;
    
    const finishRound = () => {
        navigate('/round-results', { 
            state: { 
                roundNumber: roundNum,
                players: players,
                pointsToWin: location.state?.pointsToWin,
            } 
        });
    }

    return (
        <>
            <h1>Round {roundNum} in progress</h1>
            <button onClick={finishRound}>Finish Round</button>
        </>
    )    
}
export default RoundInProgress;