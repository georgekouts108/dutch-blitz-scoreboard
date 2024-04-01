import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import '../styles/playerInfoPage.css'
import { cardSymbols } from "../assets/card_symbols/card_symbols";

function PlayerinfoPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const editingNames = location.state?.editingNames;
    const _playerNames = location.state?.playerNames;

    const [playerNames, setPlayerNames] = useState(editingNames ? _playerNames : Array(12).fill('') );
    
    const confirmPlayerInfo = (event) => {
        event.preventDefault();
        
        let validNameCount = 0
        for (let p = 0; p < playerNames.length; p++) {
            if (playerNames[p] !== ""){
                validNameCount++;
            }
        }

        if (validNameCount < 2) {
            alert("ERROR: You must include between 2-12 names.")
        }
        else {
        
            const finalPlayerInfo = []
            let playerCount = 0
            for (let p = 0; p < playerNames.length; p++){
                if (playerNames[p] !== ''){
                    playerCount++;
                    const next_player = {
                        id: p,
                        name: playerNames[p],
                        num: playerCount
                    }
                    finalPlayerInfo.push(next_player)
                }
            }
        
            navigate('/winning-points', { 
                state: { 
                    players: finalPlayerInfo,
                    playerNames: playerNames
                } 
            });
        }   
    }
    
    const updatePlayerName = (index, value) => {
        const updatedPlayerNames = [...playerNames];
        updatedPlayerNames[index] = value;
        setPlayerNames(updatedPlayerNames);
    }
 
    return (
        <>
            <h1>What are the names and symbols of the players?</h1>
            <br/>
            <div className="player-info-form">
            <form onSubmit={confirmPlayerInfo}>
                <div className="row">
                {
                    playerNames.slice(0,4).map((value, index) => (
                        <div className="block" key={index}>
                            <div>
                            <img src={cardSymbols[index]} alt="hhh" height={150} width={150}/>
                            </div>
                            
                            <input id={"playerNameID_"+(index)}
                                type="text" 
                                value={value} 
                                onChange={(e) => updatePlayerName(index, e.target.value)}
                                placeholder={`Your Name Here`} 
                            />
                            <br/><br/>
                        </div>
                    ))
                }
                </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="row">
                {
                    playerNames.slice(4,8).map((value, index) => (
                        <div className="block" key={index+4}>
                            <div>
                            <img src={cardSymbols[index+4]} alt="hhh" height={150} width={150}/>
                            </div>
                            
                            <input id={"playerNameID_"+(index+4)}
                                type="text" 
                                value={value} 
                                onChange={(e) => updatePlayerName(index+4, e.target.value)}
                                placeholder={`Your Name Here`} 
                            />
                            <br/><br/>
                        </div>
                    ))
                }
                </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="row">
                {
                    playerNames.slice(8).map((value, index) => (
                        <div className="block" key={index+8}>
                            <div>
                            <img src={cardSymbols[index+8]} alt="hhh" height={150} width={150}/>
                            </div>
                            
                            <input id={"playerNameID_"+(index+8)}
                                type="text" 
                                value={value} 
                                onChange={(e) => updatePlayerName(index+8, e.target.value)}
                                placeholder={`Your Name Here`} 
                            />
                            <br/><br/>
                        </div>
                    ))
                }
                </div>
                <br/>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <button type="submit">Confirm Player Information</button><br /><br />
            </form>
            </div>
            <br></br>
        </>
    )
}
export default PlayerinfoPage;