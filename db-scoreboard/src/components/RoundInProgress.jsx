import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function RoundInProgress() {
    const navigate = useNavigate();
    const location = useLocation();

    const roundNum = location.state?.roundNumber;
    const players = location.state?.players;
    //const timeLimit = location.state?.roundTimeLimit; // minutes, if there is a limit

    // const [secondsLeft,setSecondsLeft] = useState(location.state?.roundTimeLimit * 60) 
    const [secondsLeft, setSecondsLeft] = useState(130) 
    const [minutesLeft, setMinutesLeft] = useState(Math.floor(secondsLeft/60)) 
    const [displayedSecondsLeft, setDisplayedSecondsLeft] = useState(0)
   

    useEffect(()=>{
        const interval = setInterval(() => {
            if (secondsLeft > 0){
                setSecondsLeft(s => s - 1);
                setMinutesLeft(Math.floor(secondsLeft / 60))
                setDisplayedSecondsLeft((secondsLeft % (60*minutesLeft)) % 60)
            }
            else {
                clearInterval(interval);
                finishRound();
            }     
        },1000)

        return () => clearInterval(interval);
    },[secondsLeft])
    
    const finishRound = () => {
        navigate('/round-results', { 
            state: { 
                roundNumber: roundNum,
                players: players,
                pointsToWin: location.state?.pointsToWin,
                roundTimeLimit: location.state?.roundTimeLimit
            } 
        });
    }

    if (secondsLeft === -60){
        return (
            <>
                <h1>Round {roundNum} in progress</h1>
                <h2>No time limit</h2>
                <button onClick={finishRound}>Finish Round</button>
            </>
        )
    }
    else {
        return (
            <>
                <h1>Round {roundNum} in progress</h1>
                
                <h2>
                {secondsLeft} sec = {minutesLeft} min {secondsLeft} sec left
                </h2>
                <button onClick={finishRound}>Finish Round</button>
            </>
        )
    }
    
}
export default RoundInProgress;