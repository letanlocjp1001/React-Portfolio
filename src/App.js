import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Skill from './pages/Skill'
import Project from './pages/Project'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Project />
      </Router>
    </>
  )
}

export default App
