import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './components/IntroPage'
import PlayercountPage from './components/PlayercountPage'
import PlayerinfoPage from './components/PlayerinfoPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={IntroPage}/>
          <Route path="/player-count" Component={PlayercountPage} />
          <Route path="/player-info" Component={PlayerinfoPage}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
