import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Ranks } from "../assets/ranks";

function GameStatistics() {
    const navigate = useNavigate();
    const location = useLocation();

    const roundsPlayed = location.state?.roundsPlayed;
    const players = location.state?.players;
    const pointsToWin = location.state?.pointsToWin;
    const championIDs = location.state?.championIDs;

    const goToFinalScores = () => {
        navigate('/game-conclusion', { 
            state: { 
                roundNumber: roundsPlayed,
                players: players,
                pointsToWin: pointsToWin,
                championIDs: championIDs
            } 
        });
    }
    return (
        <>
            <h1>Game Statistics</h1>
            <button onClick={goToFinalScores}>Back To Final Scores</button>
        </>
    )
}
export default GameStatistics;