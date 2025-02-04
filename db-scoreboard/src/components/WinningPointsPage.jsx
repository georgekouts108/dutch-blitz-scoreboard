import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Ranks } from "../assets/rank_images/ranks";

function WinningPointsPage() {
    document.title = "Points to Win - Dutch Blitz Scoreboard"

    const navigate = useNavigate();

    const location = useLocation();
    const players = location.state?.players;
    const playerNames = location.state?.playerNames;

    const [winningPoints, setWinningPoints] = useState(75);

    const changeWinningPoints = (up, amount) => {
        setWinningPoints(up ? Math.min(150, winningPoints + amount) : Math.max(75, winningPoints - amount));
    }

    const startGame = () => {
        for (let p = 0; p < players.length; p++) {
            players[p].grandTotal = 0
            players[p].proundTotal = 0
            players[p].rank = Ranks.FIRST
            players[p].won = false
            players[p].blitzCount = 0
            players[p].blitzedCurrentRound = false
            players[p].scoreHistory = [0]
        }

        navigate('/scoreboard', { 
            state: { 
                players: players,
                pointsToWin: winningPoints,
                roundNumber: 0
            } 
        });
    }

    return (
        <>
            <h1>How many points are needed to win?</h1>
            <br></br>
            <h1>{winningPoints}</h1>
            <button disabled={winningPoints===75} onClick={() => changeWinningPoints(false, 5)}>-5</button>
            <button disabled={winningPoints===150} onClick={() => changeWinningPoints(true, 5)}>+5</button>
            <button disabled={winningPoints===75} onClick={() => changeWinningPoints(false, 1)}>-1</button>
            <button disabled={winningPoints===150} onClick={() => changeWinningPoints(true, 1)}>+1</button>
            <br/><br/><br/>
            
            <button onClick={startGame}>Start Game!</button><br/><br/>
            
            <button onClick={() => navigate(`/player-info`, { 
                state: { 
                    playerNames: playerNames,
                    editingNames: true
                } 
            })}>Edit Player Names</button>
        </>
    )
}
export default WinningPointsPage;