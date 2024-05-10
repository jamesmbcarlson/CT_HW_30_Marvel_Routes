import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import styles from './NavBar.module.css';

function NavBar() {
    const navigate = useNavigate();
  return (
    <nav>
        <img src='../src/assets/images/icon_shield.svg' onClick={() => navigate('/')}/>
        <NavLink to='/'
            className={({ isActive }) => 
            isActive ? styles.active : styles.inactive }>Home
        </NavLink>
        <NavLink to='/characters/'
            className={({ isActive }) => 
            isActive ? styles.active : styles.inactive }>Characters
        </NavLink>
        <NavLink to='/comics'
            className={({ isActive }) => 
            isActive ? styles.active : styles.inactive }>Comics
        </NavLink>
    </nav>
  )
}

export default NavBar
