/* 
  James Carlson
  Coding Temple - SE FT-144
  Frontend, Module 11 Lesson 4 Assignment: React Routing and Single-Page Applications
*/

import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import styles from './BrowseCharacters.module.css'
import NavBar from './NavBar';

function CharacterList() {
    const [characterList, setCharacterList] = useState(null);
    
    const { offset = 0 } = useParams();
    const navigate = useNavigate();

    // get list of 25 characters on load or when list offset is updated 
    useEffect(() => {
        const fetchData = async () => {
            // get character list data and set to value for rendering
            const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=7d688b5e0e4aa54d476269d9a8d66ff3&hash=2971945741b8323fdd1eaeb3085f716e&limit=25&offset=${offset}`);
            setCharacterList(response.data.data.results);
        }
        fetchData();
    }, [offset]);

    // update offset using arrow buttons
    const updateOffset = (offsetDelta) => {
        let newOffset = Number(offset) + Number(offsetDelta);
        if(newOffset < 0) {
            newOffset = 1550; // hardcoded from current data
        }
        else if (newOffset > 1550) {
            newOffset = 0;
        }

        // update URI; will fetch next set of data
        navigate(`../characters/${newOffset}`);
    }

  return (
    <>
        <NavBar/>   
        <div className={styles.listContainer}>
            {(characterList) &&
            <div>
                <h1>Characters</h1>
                <div className={styles.offsetButtons}>
                    <button onClick={() => {updateOffset(-25)}}>◀◀</button>
                    <button onClick={() => {updateOffset(25)}}>▶▶</button>
                </div>
            {characterList.map((character => (
                <div className={styles.characterCard} onClick={() => {
                    navigate(`../character/${character.id}`)
                }}>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
                    <h3 key={character.id}>
                        {character.name}
                    </h3>
                </div>
            )))}
                <div className={styles.offsetButtons}>
                    <button onClick={() => {updateOffset(-25)}}>◀◀</button>
                    <button onClick={() => {updateOffset(25)}}>▶▶</button>
                </div>
            </div>}
        </div>
    </>
  )
}

export default CharacterList

