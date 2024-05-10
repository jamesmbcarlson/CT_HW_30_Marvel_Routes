/* 
  James Carlson
  Coding Temple - SE FT-144
  Frontend, Module 11 Lesson 4 Assignment: React Routing and Single-Page Applications
*/

import { Routes, Route } from 'react-router-dom'

import Home from './components/Home.jsx'
import BrowseCharacters from './components/BrowseCharacters.jsx'
import CharacterDetails from './components/CharacterDetails.jsx'
import Comics from './components/Comics.jsx'
import ComicDetails from './components/ComicDetails.jsx'
import NotFound from './components/NotFound.jsx'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters/' element={<BrowseCharacters /> } /> 
        <Route path='/characters/:offset' element={<BrowseCharacters /> } /> 
        <Route path='/character/:id' element={<CharacterDetails />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='/comics/:offset' element={<Comics />} />
        <Route path='/comic/:id' element={<ComicDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App



      
