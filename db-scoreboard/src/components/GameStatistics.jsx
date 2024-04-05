import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Ranks } from "../assets/ranks";
import { cardSymbols, cardSymbolNames } from "../assets/card_symbols/card_symbols";

import ScoreChart from "./ScoresChart";


function GameStatistics() {
    const navigate = useNavigate();
    const location = useLocation();

    const roundsPlayed = location.state?.roundsPlayed;
    const players = location.state?.players;
    const pointsToWin = location.state?.pointsToWin;
    const championIDs = location.state?.championIDs;

    const temp = [...players]
    const blitzCounts = []
    for (let t = 0; t < temp.length; t++) {
        blitzCounts.push([temp[t].id, temp[t].blitzCount])
    }
    blitzCounts.sort((a, b) => b[1] - a[1]);
    const sortedPlayersByBlitzCount = []
    for (let bc = 0; bc < blitzCounts.length; bc++) {
        for (let p = 0; p < players.length; p++) {
            if (players[p].id === blitzCounts[bc][0]) {
                sortedPlayersByBlitzCount.push(players[p])
                break;
            }
        }
    }

    const scoresAfterEachRound = []
    for (let r = 0; r <= roundsPlayed; r++) {
        scoresAfterEachRound.push({round: (r === 0 ? '' : r )})
    }
    for (let p = 0; p < players.length; p++) {
        for (let r = 0; r < scoresAfterEachRound.length; r++) {
            scoresAfterEachRound[r][players[p].name+" (Player "+players[p].num+")"] = players[p].scoreHistory[r]
        }
    }

    const [blitzCountSorting, setBlitzCountSorting] = useState(sortedPlayersByBlitzCount)
    
    const goToFinalScores = () => {
        navigate('/game-conclusion', { 
            state: { 
                roundNumber: roundsPlayed,
                players: players,
                pointsToWin: pointsToWin,
                championIDs: championIDs
            } 
        });
    }
    
    return (
        <>
            <h1>Game Statistics</h1>
            <h2>Scores of Each Player</h2>
            <div>
                <ScoreChart data={scoresAfterEachRound} roundsPlayed={roundsPlayed}/>
            </div>
            <br/><br/>
            <hr></hr>
            <div>
            
            <h2>Blitz Count Per Player</h2>

            <>
                <div>
                    {
                        blitzCountSorting.map((player, index) => (
                            <div key={index} className="row">
                                <h3><img src={cardSymbols[player.id]} alt="hhh" height={50} width={50}/> ~~ {player.name} ~~ Blitzed {player.blitzCount} time{(player.blitzCount===1 ? '' : 's')}</h3>
                            </div> 
                        ))
                        
                    }<br></br>
                </div>
            </>
            </div>
            <hr></hr>
            <button onClick={goToFinalScores}>Back To Final Scores</button>
        </>
    )
}
export default GameStatistics;