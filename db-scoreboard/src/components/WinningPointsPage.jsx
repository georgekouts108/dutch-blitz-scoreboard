import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function WinningPointsPage() {
    const navigate = useNavigate();
    const [winningPoints, setWinningPoints] = useState(75);

    const changeWinningPoints = (up) => {
        if (up && winningPoints < 150){
            setWinningPoints(winningPoints + 5)
        }
        else if (!up && winningPoints > 75){
            setWinningPoints(winningPoints - 5)
        }
    }
    return (
        <>
            <h1>How many points are needed to win?</h1>
            <br></br>
            <h1>{winningPoints}</h1>
            <button onClick={() => changeWinningPoints(false)}>-5</button>
            <button onClick={() => changeWinningPoints(true)}>+5</button>
            <br/><br/><br/>
            <button >Start Game!</button><br/><br/>
            <button onClick={() => navigate('/player-info')}>Edit Player Names</button>
        </>
    )
}
export default WinningPointsPage;