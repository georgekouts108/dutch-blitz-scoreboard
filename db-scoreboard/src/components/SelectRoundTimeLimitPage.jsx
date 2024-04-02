import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { TimeLimit } from "../assets/roundTimeLimits";

function SelectRoundTimeLimitPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const players = location.state?.players;
    const pointsToWin = location.state?.pointsToWin;
   
    const [timeLimit, setTimeLimit] = useState(TimeLimit.INFINITE);

    const changeTimeLimit = (event) => {
        setTimeLimit(event.target.value);
    }

    const startGame = () => {
        navigate('/scoreboard', { 
            state: { 
                players: players,
                pointsToWin: pointsToWin,
                roundNumber: 0,
                roundTimeLimit: timeLimit
            } 
        });
    }

    return (
        <>
            <h1>Select a time limit for each round</h1>
            <br></br>

            <input onChange={changeTimeLimit} type="radio" name="round_time_limit" value={TimeLimit.INFINITE} id="option1"/>
            <label htmlFor="option1">Infinite</label><br/>

            <input onChange={changeTimeLimit} type="radio" name="round_time_limit" value={TimeLimit.THREE_MIN} id="option2"/>
            <label htmlFor="option2">3 Minutes</label><br/>
  
            <input onChange={changeTimeLimit} type="radio" name="round_time_limit" value={TimeLimit.FIVE_MIN} id="option3"/>
            <label htmlFor="option3">5 Minutes</label><br/>
  
            <input onChange={changeTimeLimit} type="radio" name="round_time_limit" value={TimeLimit.SEVEN_MIN} id="option4"/>
            <label htmlFor="option4">7 Minutes</label><br/>
            
            <br/><br/>
            <button onClick={startGame}>Start Game!</button>
        </>
    )
}
export default SelectRoundTimeLimitPage;