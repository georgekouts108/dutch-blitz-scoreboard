import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function RoundInProgress() {
    const navigate = useNavigate();
    const location = useLocation();

    const roundNum = location.state?.roundNumber;
    const players = location.state?.players;

    return (
        <>
            <h1>Round {roundNum} in progress</h1>
            <button>Finish Round</button>
        </>
    )
}
export default RoundInProgress;