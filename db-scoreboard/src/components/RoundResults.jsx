import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { cardSymbols } from "../assets/card_symbols/card_symbols";

import RoundResultsCard from "./RoundResultsCard";


function RoundResults() {
    const navigate = useNavigate();
    const location = useLocation();

    const roundNum = location.state?.roundNumber;
    const players = location.state?.players;

    // this array will eventually update the grand total fields in "player"
    const [roundResults, setRoundResults] = useState(
        players.map(player => {
            return {
                pid: player.id, 
                dutch:0, 
                blitz:0, 
                roundTotal:0
            }
        })
    )

    const confirmResults = () => {
        console.log("todo")
        console.log(roundResults)
    }

    // const updateResults = (index, value) => {
    //     const updatedPlayerNames = [...playerNames];
    //     updatedPlayerNames[index] = value;
    //     setPlayerNames(updatedPlayerNames);
    // }
    return (
        <>
            <h1>Enter all the results of Round {roundNum}</h1>

            <div>
                {
                    players.map((player, index) => (
                        <div key={player.id} className="row">
                            <RoundResultsCard p_id={player.id} p_name={player.name}/>
                        </div> 
                    ))
                    
                }<br></br>
            </div>

            <button onClick={confirmResults}>Confirm Results</button>
        </>
    )
}
export default RoundResults;