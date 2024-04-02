import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Ranks } from "../assets/ranks";

import SBoardRow from "./SBoardRow";

function Scoreboard() {
    const navigate = useNavigate();
    const location = useLocation();

    const dummyPlayers = [
        {id: 0, name: 'Dimitri', num: 1, grandTotal: 0, rank: '1st'},
        {id: 1, name: 'George', num: 2, grandTotal: 0, rank: '1st'},
        {id: 10, name: 'Michael', num: 3, grandTotal: 0, rank: '1st'}
    ]

    //const [players, setPlayers] = useState(dummyPlayers); // this is temporary
    
    const [players, setPlayers] = useState(location.state?.players);
    const [pointsToWin, setPointsToWin] = useState(location.state?.pointsToWin);
    const [roundCount, setRoundCount] = useState(location.state?.roundNumber);


    const startNewRound = () => {
        navigate('/round-in-progress', { 
            state: { 
                roundNumber: roundCount + 1,
                players: players,
                pointsToWin: pointsToWin
            } 
        });
    }

    return (
        <>
            <h1>Scoreboard</h1>
            <h2>Be the first to reach {pointsToWin} points or more!</h2>
            <div>
                {
                    players.map((player, index) => (
                        <div key={index} className="row">
                            <SBoardRow p_rank={player.rank} p_id={player.id} p_name={player.name} p_grandTotal={player.grandTotal} />
                        </div> 
                    ))
                    
                }<br></br>
            </div>
            <button>Quit Game</button>
            <button onClick={startNewRound}>Start Round {roundCount + 1}!</button>
        </>
    )
}
export default Scoreboard;