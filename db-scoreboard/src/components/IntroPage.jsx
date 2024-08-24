import React from "react";
import { useNavigate } from 'react-router-dom';
import dbLogo from '../assets/images/db_logo.gif'
import blitzFemale from '../assets/images/blitz_female.png'
import blitzMale from '../assets/images/blitz_male.png'
import '../styles/introPage.css'

function IntroPage() {
    const navigate = useNavigate();
    document.title = "Home - Dutch Blitz Scoreboard"
    return (
        <>
            <img src={blitzMale} className="icon-farmer"/><img src={dbLogo}/><img className="icon-farmer" src={blitzFemale}/>
            <h2>A Vonderful Goot Scoreboard</h2>
            <button onClick={()=>navigate('/player-info', {
                state:{editingNames:false}
            }
            )}>Begin A New Game</button>
        </>
    )
}
export default IntroPage;
