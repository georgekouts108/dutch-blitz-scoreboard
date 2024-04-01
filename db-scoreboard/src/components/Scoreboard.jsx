import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Ranks } from "../assets/ranks";

function Scoreboard() {
    const navigate = useNavigate();
    const location = useLocation();

    const [players, setPlayers] = useState(location.state?.players);
    const [pointsToWin, setPointsToWin] = useState(location.state?.pointsToWin);
    const [roundCount, setRoundCount] = useState(0);

    return (
        <>
            <h1>Scoreboard</h1>
            
            <h2>Be the first to reach {pointsToWin} points or more!</h2>
            <h3>{players[3].name}</h3>
            <button>Quit Game</button>
            <button>Start Next Round!</button>
        </>
    )
}
export default Scoreboard;