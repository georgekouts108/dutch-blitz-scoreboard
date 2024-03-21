import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function PlayerinfoPage() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const numOfPlayers = location.state?.numOfPlayers;
    const isEditing = location.state?.editingNames;
    const _playerNames = location.state?.playerNames;
    

    const [playerNames, setPlayerNames] = useState(isEditing ? _playerNames : Array(numOfPlayers).fill('') );

    const confirmPlayerInfo = (event) => {
        event.preventDefault();
        console.log("Player names:");
        console.log(playerNames);
        navigate('/winning-points', { 
            state: { 
                numOfPlayers: numOfPlayers,
                playerNames: playerNames
            } 
        });
    }
    const updatePlayerName = (index, value) => {
        const updatedPlayerNames = [...playerNames];
        updatedPlayerNames[index] = value;
        setPlayerNames(updatedPlayerNames);
    }
 
    return (
        <>
            <h1>Enter the names of the {numOfPlayers} player(s)</h1>
            <br></br>
            <form onSubmit={confirmPlayerInfo}>
                {
                    playerNames.map((value, index) => (
                        <div key={index}>
                            < label>PLAYER {index+1}:    </label>
                            <input required
                                type="text" 
                                value={value} 
                                onChange={(e) => updatePlayerName(index,e.target.value)}
                                placeholder={`Player ${index + 1}'s Name`} 
                            />
                            <br/><br/>
                        </div>
                        
                    ))
                }
                <br/><br/>
                <button type="submit">Confirm</button>
            </form>
            <br></br>
            

            <button onClick={() => navigate('/player-count')}>Change Player Count</button>
        </>
    )
}
export default PlayerinfoPage;