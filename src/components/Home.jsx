/* 
  James Carlson
  Coding Temple - SE FT-144
  Frontend, Module 11 Lesson 4 Assignment: React Routing and Single-Page Applications
*/

import React from 'react'
import NavBar from './NavBar.jsx'

function Home() {
  return (
    <div>
        <NavBar/>
        <div className='body-header'>
            <div className='logo-container'></div>
            <h1>SHIELD Database</h1>
            <p>Utilize this database to browse those SHIELD considers to be Persons of Interest. And comic books!</p>
        </div>
    </div>
  )
}

export default Home
