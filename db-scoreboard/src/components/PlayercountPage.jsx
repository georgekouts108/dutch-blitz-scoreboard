import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function PlayercountPage() {
    const navigate = useNavigate();
    const [playerCount, setPlayerCount] = useState(4);

    const updatePlayerCount = (up) => {
        if (up && playerCount < 8){
            setPlayerCount(playerCount+1)
        }
        else if (!up && playerCount > 2){
            setPlayerCount(playerCount-1)
        }
    }
    return (
        <>
            <h1>How many people are playing?</h1>
            <br></br>
            <h1>{playerCount}</h1>
            <button onClick={() => updatePlayerCount(false)}>-</button>
            <button onClick={() => updatePlayerCount(true)}>+</button>
            <br/><br/><br/>
            <button onClick={() => navigate(`/player-info?playerCount=${playerCount}`)}>Confirm</button><br/><br/>
            <button onClick={() => navigate('/')}>Return to Home</button>
        </>
    )
}
export default PlayercountPage;