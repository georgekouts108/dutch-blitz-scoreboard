import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './components/IntroPage'
import PlayerinfoPage from './components/PlayerinfoPage';
import WinningPointsPage from './components/WinningPointsPage';
import Scoreboard from './components/Scoreboard';
import RoundInProgress from './components/RoundInProgress';
import RoundResults from './components/RoundResults';
import GameConclusion from './components/GameConclusion';
import GameStatistics from './components/GameStatistics';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={IntroPage}/>
          <Route path="/player-info" Component={PlayerinfoPage}/>
          <Route path="/winning-points" Component={WinningPointsPage}/>
          <Route path="/scoreboard" Component={Scoreboard}/>
          <Route path="/round-in-progress" Component={RoundInProgress} />
          <Route path="/round-results" Component={RoundResults} />
          <Route path="/game-conclusion" Component={GameConclusion}/>
          <Route path="/game-statistics" Component={GameStatistics}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
