import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function WinningPointsPage() {
    const navigate = useNavigate();

    const location = useLocation();
    const players = location.state?.players;
    const playerNames = location.state?.playerNames;

    const [winningPoints, setWinningPoints] = useState(75);

    const changeWinningPoints = (up) => {
        if (up && winningPoints < 150){
            setWinningPoints(winningPoints + 5)
        }
        else if (!up && winningPoints > 75){
            setWinningPoints(winningPoints - 5)
        }
    }

    const dummyFunction = () => {
        console.log("player names:")
        for (let p = 0; p < playerNames.length; p++) {
            console.log("   "+playerNames[p])
        }
        console.log("winning points: "+winningPoints)
    }

    return (
        <>
            <h1>How many points are needed to win?</h1>
            <br></br>
            <h1>{winningPoints}</h1>
            <button onClick={() => changeWinningPoints(false)}>-5</button>
            <button onClick={() => changeWinningPoints(true)}>+5</button>
            <br/><br/><br/>
            <button onClick={dummyFunction}>Start Game!</button><br/><br/>
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