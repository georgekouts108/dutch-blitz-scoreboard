import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { cardSymbols } from "../assets/card_symbols/card_symbols";

function RoundResults() {
    const navigate = useNavigate();
    const location = useLocation();

    const roundNum = location.state?.roundNumber;
    const players = location.state?.players;

    
    const _ri = []
    if (players !== undefined){
       
        for (let p = 0; p < players.length; p++) {
            const _next = {
                pid: players[p].id, 
                pname: players[p].name,
                prank: players[p].rank,
                pgrandTotal: players[p].grandTotal,
                pnum: players[p].num,
                dutch:0, 
                blitz:0, 
                scoreConfirmed:false
            }
            _ri.push(_next)
        }
    }
   
 
    // this array will eventually update the grand total fields in "player"
    const [roundResults, setRoundResults] = useState(_ri)

    const [scoreConfirmCount, setScoreConfirmCount] = useState(0)
    const [playerCount, setPlayerCount] = useState(players.length)
    
    const updateCount = (pnum, category, amount, up) => {
        const tempRoundResults = [...roundResults]
        
        if (category === 'dutch') {
            if (up) {
                tempRoundResults[pnum - 1].dutch = Math.min(40, tempRoundResults[pnum - 1].dutch + amount)
            }
            else {
                tempRoundResults[pnum - 1].dutch = Math.max(0, tempRoundResults[pnum - 1].dutch - amount)
            }
        }
        else if (category === 'blitz') {
            if (up) {
                tempRoundResults[pnum - 1].blitz = Math.min(10, tempRoundResults[pnum - 1].blitz + amount)
            }
            else {
                tempRoundResults[pnum - 1].blitz = Math.max(0, tempRoundResults[pnum - 1].blitz - amount)
            }
        }
        
        setRoundResults(tempRoundResults)
        console.log(roundResults)
    }

    const confirmPlayerScore = (pnum) => {
        const tempRoundResults = [...roundResults]
        let roundScore = tempRoundResults[pnum - 1].dutch - (2 * tempRoundResults[pnum - 1].blitz)
        tempRoundResults[pnum - 1].pgrandTotal = tempRoundResults[pnum - 1].pgrandTotal + roundScore
        tempRoundResults[pnum - 1].scoreConfirmed = true
        setScoreConfirmCount(scoreConfirmCount + 1)
        setRoundResults(tempRoundResults)
    }

    const confirmResults = () => {
        console.log("todo")
        console.log(roundResults)
    }
    
    return (
        <>
            <h1>Enter all the results of Round {roundNum}</h1>

            <div>
                {
                    roundResults.map((player) => (
                        <div key={player.pid} className="row">
                            <div> 
                                    {
                                        <div>
                                            <img src={cardSymbols[player.pid]} alt="hhh" height={60} width={60}/>
                                            <b>{player.pname}</b>
                                            <h3>Number of Dutch Cards: {roundResults[player.pnum - 1].dutch}</h3>
                                            
                                            <button disabled={player.scoreConfirmed===true || roundResults[player.pnum - 1].dutch===0} onClick={() => updateCount(player.pnum,'dutch',1,false)} >-1</button>
                                            <button disabled={player.scoreConfirmed===true || roundResults[player.pnum - 1].dutch===0} onClick={() => updateCount(player.pnum,'dutch',5,false)}>-5</button>
                                            <button disabled={player.scoreConfirmed===true || roundResults[player.pnum - 1].dutch===40} onClick={() => updateCount(player.pnum,'dutch',5,true)}>+5</button>
                                            <button disabled={player.scoreConfirmed===true || roundResults[player.pnum - 1].dutch===40} onClick={() => updateCount(player.pnum,'dutch',1,true)}>+1</button>
                                            
                                        
                                            <h3>Number of Blitz Cards: {roundResults[player.pnum - 1].blitz}</h3>

                                            <button disabled={player.scoreConfirmed===true || roundResults[player.pnum - 1].blitz===0} onClick={() => updateCount(player.pnum,'blitz',1,false)} >-1</button>
                                            <button disabled={player.scoreConfirmed===true || roundResults[player.pnum - 1].blitz===10} onClick={() => updateCount(player.pnum,'blitz',1,true)}>+1</button>
                                            
                                        
                                            <br/><br/>
                                        </div>
                                    }
                                    <button disabled={player.scoreConfirmed===true} onClick={() => confirmPlayerScore(player.pnum)}>Confirm Score</button>
                                    <br/><br/>
                                    <hr></hr>
                            </div>
                        </div> 
                    ))
                }
                <br></br>
            </div>

            <button disabled={scoreConfirmCount < playerCount} onClick={confirmResults}>Continue</button>
        </>
    )
}
export default RoundResults;