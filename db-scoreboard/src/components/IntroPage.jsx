import React from "react";
import { useNavigate } from 'react-router-dom';

function IntroPage() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Dutch Blitz</h1>
            <h2>Scoreboard for the vonderful goot game</h2>
            <button onClick={()=>navigate('/player-count')}>Begin A New Game</button>
        </>
    )
}
export default IntroPage;
