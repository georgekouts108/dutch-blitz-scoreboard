import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Ranks } from "../assets/ranks";

function Scoreboard() {
    const navigate = useNavigate();
    const location = useLocation();

    const _players = location.state?.players;
    const _pointsToWin = location.state?.pointsToWin;

    const [players, setPlayers] = useState(_players);
    const [pointsToWin, setPointsToWin] = useState(_pointsToWin);

    return (
        <>
            <h1>Scoreboard</h1>
        </>
    )
}
export default Scoreboard;