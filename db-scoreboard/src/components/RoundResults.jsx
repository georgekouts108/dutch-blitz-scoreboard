import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { cardSymbols } from "../assets/card_symbols/card_symbols";
import { Ranks } from "../assets/ranks";

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
        
        // update the ranks for all players, based on their new grand totals
        const pnums = []
        const pgtotals = []
        const scores_with_indexes = []

        for (let r = 0; r < roundResults.length; r++){
            pnums.push(roundResults[r].pnum)
            pgtotals.push(roundResults[r].pgrandTotal)
            scores_with_indexes.push([r, roundResults[r].pgrandTotal])
        }
        scores_with_indexes.sort((a, b) => b[1] - a[1]);
        pgtotals.sort((a, b) => b - a);

        const pgtotalsNoDups = pgtotals.filter((value, index, array) => array.indexOf(value) === index);
        pgtotalsNoDups.sort((a, b) => b - a);

        const rankClassifications = []
        for (let pgt = 0; pgt < pgtotalsNoDups.length; pgt++) {
            const achievers = []
            for (let swi = 0; swi < scores_with_indexes.length; swi++) {
                if (scores_with_indexes[swi][1]===pgtotalsNoDups[pgt]){
                    achievers.push(scores_with_indexes[swi][0]+1)
                }
            }
            rankClassifications.push(achievers);
        }
        
        const tempRoundResults = [...roundResults]
        for (let rc = 0; rc < rankClassifications.length; rc++) {
            for (let i = 0; i < rankClassifications[rc].length; i++){
                let _pnum = rankClassifications[rc][i]
                tempRoundResults[_pnum - 1].prank = getPlace(rc + 1)
            }
        }
        setRoundResults(tempRoundResults)

        const updatedPlayers = []

        for (let i = 0; i < roundResults.length; i++) {
            updatedPlayers.push({
                id: roundResults[i].pid,
                name: roundResults[i].pname,
                num: roundResults[i].pnum,
                grandTotal: roundResults[i].pgrandTotal,
                rank: roundResults[i].prank
            })
        }

        navigate('/scoreboard', { 
            state: { 
                roundNumber: location.state?.roundNumber,
                players: updatedPlayers,
                pointsToWin: location.state?.pointsToWin
            } 
        });

    }
    const getPlace = (place) => {
        let _place = Ranks.FIRST;
        switch (place) {
            case 1: _place = Ranks.FIRST; break;
            case 2: _place = Ranks.SECOND; break;
            case 3: _place = Ranks.THIRD; break;
            case 4: _place = Ranks.FOURTH; break;
            case 5: _place = Ranks.FIFTH; break;
            case 6: _place = Ranks.SIXTH; break;
            case 7: _place = Ranks.SEVENTH; break;
            case 8: _place = Ranks.EIGHTH; break;
            case 9: _place = Ranks.NINETH; break;
            case 10: _place = Ranks.TENTH; break;
            case 11: _place = Ranks.ELEVENTH; break;
            case 12: _place = Ranks.TWELVETH; break;
        }
        return _place;
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