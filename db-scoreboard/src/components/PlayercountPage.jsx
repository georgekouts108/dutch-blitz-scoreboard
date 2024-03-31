import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function PlayercountPage() {
    const navigate = useNavigate();

    const location = useLocation();

    const origialPlayerCount = location.state?.origialPlayerCount;
    const _playerNames = location.state?.playerNames;
    const isUpdatingCount = location.state?.isUpdatingCount;
    
    const [playerCount, setPlayerCount] = useState(origialPlayerCount !== undefined ? origialPlayerCount :  4);

    const updatePlayerCount = (up) => {
        let newVal = playerCount
        if (up && playerCount < 12){
            newVal += 1
        }
        else if (!up && playerCount > 2){
            newVal -= 1
        }
        setPlayerCount(newVal)
    }
    useEffect(() => {
        document.getElementById("count-warning").innerHTML = (playerCount < origialPlayerCount ? 
            `WARNING: If you choose less than ${origialPlayerCount} players, you'll need to retype all players' names` : "")
      }, [playerCount])

    const getUpdatedPlayerNames = () => {
        let updated = [];
        let result = undefined;
        if (isUpdatingCount) {
            
            if (playerCount === origialPlayerCount) {
                updated = _playerNames;
                result = true;
            }

            else if (playerCount > origialPlayerCount) {

                for (let n = 0; n < _playerNames.length; n++) {
                    updated.push(_playerNames[n])
                }
                for (let n = 0; n < playerCount - origialPlayerCount; n++) {
                    updated.push('')
                }
                result = true;
            }
            else {
                updated = Array(playerCount).fill('')
                result = false;
            }
        }
        else {
            updated = Array(playerCount).fill('')
        }
        return [updated,result];
    }
    return (
        <>
            <h1>How many people are playing?</h1>
            <br></br>
            <h1>{playerCount}</h1>
            <button disabled={playerCount === 2} onClick={() => updatePlayerCount(false)}>-</button>
            <button disabled={playerCount === 12} onClick={() => updatePlayerCount(true)}>+</button>
            <br/><br/>

            <p id="count-warning"></p>

            <br/>
            <button onClick={() => navigate(`/player-info`, { 
                state: { 
                    numOfPlayers: playerCount,
                    editingNames: false || getUpdatedPlayerNames()[1] ,
                    playerNames: getUpdatedPlayerNames()[0]
                } 
                }) 
            }  >Confirm</button><br/><br/>
            <button onClick={() => navigate('/')}>Return to Home</button>
        </>
    )
}
export default PlayercountPage;