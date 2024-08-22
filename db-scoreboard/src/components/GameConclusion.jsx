import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import ScoreBanner from "./ScoreBanner";

function GameConclusion() {
    const navigate = useNavigate();
    const location = useLocation();

    const players = location.state?.players;

    const winners = []
    const nonWinners = []
    for (let p = 0; p < players.length; p++) {
        if (players[p].won) {
            winners.push(players[p]);
        }
        else {
            nonWinners.push(players[p])
        }
    }

    const pointsToWin = location.state?.pointsToWin;
    const roundsPlayed = location.state?.roundNumber;
    const championIDs = location.state?.championIDs;

    const viewStats = () => {
        navigate('/game-statistics', { 
            state: { 
                roundsPlayed: roundsPlayed,
                players: players,
                pointsToWin: pointsToWin,
                championIDs: championIDs
            } 
        });
    }

    return (
        <>
            <h1>We have {(championIDs.length > 1) ? "winners" : "a winner" }!</h1>
            <div>
                {
                    winners.map((player, index) => (
                        <div key={index} className="row">
                            <ScoreBanner p_rank={player.rank} p_id={player.id} p_name={player.name} p_grandTotal={player.grandTotal} />
                        </div> 
                    ))
                    
                }<br></br>
            </div>
            <hr/><hr/><hr/><br></br>
            <div>
                {
                    nonWinners.map((player, index) => (
                        <div key={index} className="row">
                            <ScoreBanner p_rank={player.rank} p_id={player.id} p_name={player.name} p_grandTotal={player.grandTotal} />
                        </div> 
                    ))
                    
                }<br></br>
            </div>
            <button onClick={viewStats}>View Statistics</button>
            <button onClick={() => navigate('/')}>Go Home</button>
        </>
    )

}
export default GameConclusion;