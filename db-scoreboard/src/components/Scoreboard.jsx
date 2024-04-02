import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Ranks } from "../assets/ranks";

import SBoardRow from "./SBoardRow";

function Scoreboard() {
    const navigate = useNavigate();
    const location = useLocation();

    const [players, setPlayers] = useState(location.state?.players);
    const [pointsToWin, setPointsToWin] = useState(location.state?.pointsToWin);
    const [roundCount, setRoundCount] = useState(location.state?.roundNumber);

    const sortPlayersByRankings = () => {
        const temp = [...players]
        const places = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10nd','11rd','12th']
        const rearranged = []
        for (let p = 0; p < places.length; p++){
            for (let q = 0; q < temp.length; q++) {
                if (temp[q].rank === places[p]) {
                    rearranged.push(temp[q])
                }
            }
        }
        setPlayers(rearranged)
    }
    useEffect(()=>{
        sortPlayersByRankings();
    },[])


    const startNewRound = () => {
        const _players = [...players]
        for (let p = 0; p < _players.length; p++){
            _players[p].blitz = 0;
            _players[p].dutch = 0;
            _players[p].proundTotal = 0;
        }
        setPlayers(_players)


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