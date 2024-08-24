import React from "react";
import { useNavigate } from 'react-router-dom';
import dbLogo from '../assets/images/db_logo.gif'

function IntroPage() {
    const navigate = useNavigate();
    document.title = "Home - Dutch Blitz Scoreboard"
    return (
        <>
            <img src={dbLogo}/>
            <h2>Scoreboard for the vonderful goot game</h2>
            <button onClick={()=>navigate('/player-info', {
                state:{editingNames:false}
            }
            )}>Begin A New Game</button>
        </>
    )
}
export default IntroPage;
