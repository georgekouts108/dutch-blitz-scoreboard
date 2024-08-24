import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/playerInfoPage.css'
import { cardSymbols } from "../assets/card_symbols/card_symbols";
import IconPicker from "./IconPicker";

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
        <div className="player-info-form">
            <h1>Enter the names of each player<br></br>under their chosen card symbol</h1>
                <form onSubmit={confirmPlayerInfo}>
                    {
                        playerNames.map((value, index) => (
                            <div className="block" key={index}>
                                <IconPicker _index={index} _value={value} onInputChange={updatePlayerName}/>
                            </div>
                        ))
                    }
                    <button className="confirm-btn" type="submit">Confirm Player Information</button><br /><br />
                </form>
            <br></br>
        </div>
    )
}
export default PlayerinfoPage;