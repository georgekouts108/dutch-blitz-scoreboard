import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function RoundResults() {
    const navigate = useNavigate();
    const location = useLocation();

    const roundNum = location.state?.roundNumber;
    const players = location.state?.players;

    const confirmResults = () => {
        console.log("todo")
    }
    return (
        <>
            <h1>Enter all the results of Round {roundNum}</h1>
            <button onClick={confirmResults}>Confirm Results</button>
        </>
    )
}
export default RoundResults;