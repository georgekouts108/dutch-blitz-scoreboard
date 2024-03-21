import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function PlayerinfoPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const numOfPlayers = new URLSearchParams(location.search).get('playerCount');

    return (
        <>
        <h1>{numOfPlayers}</h1>
            <h1>Enter the names of each player</h1>
            <br></br>
            
            <button>Confirm</button><br/><br/>

            <button onClick={() => navigate('/player-count')}>Return to Player Count</button>
        </>
    )
}
export default PlayerinfoPage;