import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import symbol1 from '../images/db_card_icons/symbol_1.png'
import symbol2 from '../images/db_card_icons/symbol_2.png'
import symbol3 from '../images/db_card_icons/symbol_3.png'
import symbol4 from '../images/db_card_icons/symbol_4.png'
import symbol5 from '../images/db_card_icons/symbol_5.png'
import symbol6 from '../images/db_card_icons/symbol_6.png'
import symbol7 from '../images/db_card_icons/symbol_7.png'
import symbol8 from '../images/db_card_icons/symbol_8.png'
import symbol9 from '../images/db_card_icons/symbol_9.png'
import symbol10 from '../images/db_card_icons/symbol_10.png'
import symbol11 from '../images/db_card_icons/symbol_11.png'
import symbol12 from '../images/db_card_icons/symbol_12.png'

import '../styles/playerInfoPage.css'

function PlayerinfoPage() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const numOfPlayers = location.state?.numOfPlayers;
    const isEditing = location.state?.editingNames;
    const _playerNames = location.state?.playerNames;
    
    const cardSymbols = [symbol1, symbol2, symbol3, symbol4, symbol5, symbol6, symbol7, 
    symbol8, symbol9, symbol10, symbol11, symbol12]



    //const [playerNames, setPlayerNames] = useState(isEditing ? _playerNames : Array(numOfPlayers).fill('') );
    
    const [playerNames2, setPlayerNames2] = useState( Array(12).fill('') );
    
    const confirmPlayerInfo = (event) => {
        event.preventDefault();
        console.log("Player names:");
        console.log(playerNames2);
        
        
        // navigate('/winning-points', { 
        //     state: { 
        //         numOfPlayers: numOfPlayers,
        //         playerNames: playerNames
        //     } 
        // });
    }
    // const updatePlayerName = (index, value) => {
    //     const updatedPlayerNames = [...playerNames];
    //     updatedPlayerNames[index] = value;
    //     setPlayerNames(updatedPlayerNames);
    // }

    const updatePlayerName2 = (index, value) => {
        const updatedPlayerNames = [...playerNames2];
        updatedPlayerNames[index] = value;
        setPlayerNames2(updatedPlayerNames);
    }
 
    return (
        <>
            <h1>What are the names and symbols of the players?</h1>
            <br/>
            <div className="player-info-form">
            <form onSubmit={confirmPlayerInfo}>
                <div className="row">
                {
                    playerNames2.slice(0,4).map((value, index) => (
                        <div className="block" key={index}>
                            <div>
                            <img src={cardSymbols[index]} alt="hhh" height={150} width={150}/>
                            </div>
                            
                            <input required
                                type="text" 
                                value={value} 
                                onChange={(e) => updatePlayerName2(index, e.target.value)}
                                placeholder={`Player ${index + 1}'s Name`} 
                            />
                            <br/><br/>
                        </div>
                    ))
                }
                </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="row">
                {
                    playerNames2.slice(4,8).map((value, index) => (
                        <div className="block" key={index+4}>
                            <div>
                            <img src={cardSymbols[index+4]} alt="hhh" height={150} width={150}/>
                            </div>
                            
                            <input required
                                type="text" 
                                value={value} 
                                onChange={(e) => updatePlayerName2(index+4, e.target.value)}
                                placeholder={`Player ${index+4 + 1}'s Name`} 
                            />
                            <br/><br/>
                        </div>
                    ))
                }
                </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="row">
                {
                    playerNames2.slice(8).map((value, index) => (
                        <div className="block" key={index+8}>
                            <div>
                            <img src={cardSymbols[index+8]} alt="hhh" height={150} width={150}/>
                            </div>
                            
                            <input required
                                type="text" 
                                value={value} 
                                onChange={(e) => updatePlayerName2(index+8, e.target.value)}
                                placeholder={`Player ${index+8 + 1}'s Name`} 
                            />
                            <br/><br/>
                        </div>
                    ))
                }
                </div>
                <br/>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <button type="submit">Confirm</button>
            </form>
            </div>
            <br></br>
            

            <button onClick={() => navigate('/player-count', {
                state: {
                    origialPlayerCount: numOfPlayers,
                    playerNames: playerNames2,
                    isUpdatingCount: true
                }
            })}>Change Player Count</button>
        </>
    )
}
export default PlayerinfoPage;