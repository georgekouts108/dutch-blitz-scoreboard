import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { cardSymbols } from "../assets/card_symbols/card_symbols";

function RoundResultsCard(props) {

    const [dutchCount, setDutchCount] = useState(0);
    const [blitzCount, setBlitzCount] = useState(0);

    const updateCount = (up, amount, cardCategory) => {
        if (cardCategory === "dutch") {
            setDutchCount(up ? Math.min(40, dutchCount + amount) : Math.max(0, dutchCount - amount) )
        }
        else {
            if (up && blitzCount < 10) {
                setBlitzCount(blitzCount+1);
            }
            else if (!up && blitzCount > 0){
                setBlitzCount(blitzCount-1);
            }
        }

    }
    return (
        <>
            <div> 
                <form>
                    {
                        <div>
                            <img src={cardSymbols[props.p_id]} alt="hhh" height={60} width={60}/>
                            <b>{props.p_name}</b>
                            <h3>Number of Dutch Cards:</h3>
                            <button onClick={updateCount(false, 1, 'dutch')}>-1</button> 
                            <button onClick={updateCount(false, 5, 'dutch')}>-5</button>
                            {dutchCount}
                            <button onClick={updateCount(true, 5, 'dutch')}>+5</button>
                            <button onClick={updateCount(true, 1, 'dutch')}>+1</button>

                            <h3>Number of Blitz Cards:</h3>
                            <button onClick={updateCount(false, 1,'blitz')}>-1</button> 
                            {blitzCount}
                            <button onClick={updateCount(true, 1,'blitz')}>+1</button>

                            <br/><br/>
                        
                        </div>
                    }
                </form>

            </div>
                            
                            {/* <input id={"dutch_pid_"+(player.id)}
                                type="text" 
                                value={value} 
                                onChange={(e) => updatePlayerName(index, e.target.value)}
                                placeholder={`Your Name Here`} 
                            />
                            <br/><br/> */}


                            {/* <p> {player.rank} {player.id} {player.name} {player.grandTotal} </p> */}
        </>
    )
}
export default RoundResultsCard;