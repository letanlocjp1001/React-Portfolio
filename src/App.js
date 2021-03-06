import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Spinner from './components/Spinner'

function App() {
  return (
    <Suspense fallback={<Spinner></Spinner>}>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
