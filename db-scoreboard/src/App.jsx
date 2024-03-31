import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './components/IntroPage'
import PlayerinfoPage from './components/PlayerinfoPage';
import WinningPointsPage from './components/WinningPointsPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={IntroPage}/>
          <Route path="/player-info" Component={PlayerinfoPage}/>
          <Route path="/winning-points" Component={WinningPointsPage}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
