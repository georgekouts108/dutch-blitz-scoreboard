import React, { useState } from "react";

function PlayercountPage() {
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
            <button>Confirm</button><br/><br/>
            <button>Return to Home</button>
        </>
    )
}
export default PlayercountPage;