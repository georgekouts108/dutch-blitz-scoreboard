import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import ScoreBanner from "./ScoreBanner";

function Scoreboard() {
    document.title = "Scores - Dutch Blitz Scoreboard"

    const navigate = useNavigate();
    const location = useLocation();

    const [players, setPlayers] = useState(location.state?.players);
    const [pointsToWin, setPointsToWin] = useState(location.state?.pointsToWin);
    const [roundCount, setRoundCount] = useState(location.state?.roundNumber);

    const quit = () => {
        
        let quit_confirm = confirm("Are you sure you want to quit?");
        if (quit_confirm) {
            navigate('/');
        }
    }
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
            <div className="scoreboard-title">
                Scores
            </div>
                <h1 className="scoreboard-target-points">Thou must reach <span className="points-to-win">{pointsToWin} points</span> to win</h1>
            
            <div>
                {
                    players.map((player, index) => (
                        <div key={index} className="row">
                            <ScoreBanner p_rank={player.rank} p_id={player.id} p_name={player.name} p_grandTotal={player.grandTotal}/>
                        </div> 
                    )) 
                }<br></br>
            </div>
            <button onClick={() => quit()}>Quit Game</button>
            <button onClick={startNewRound}>Start Round {roundCount + 1}!</button>
        </>
    )
}
export default Scoreboard;