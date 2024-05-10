/* 
  James Carlson
  Coding Temple - SE FT-144
  Frontend, Module 11 Lesson 4 Assignment: React Routing and Single-Page Applications
*/

import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import styles from './CharacterDetails.module.css';
import NavBar from './NavBar';

function ComicDetails() {
    const [comicDetails, setComicDetails] = useState(null);

    const { id = 0 } = useParams();

    // get new character details when a new character is selected
    useEffect(() => {
        const fetchCharacter = async () => {
            // console.log(id);
            const response = await axios.get(`https://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=7d688b5e0e4aa54d476269d9a8d66ff3&hash=2971945741b8323fdd1eaeb3085f716e`);
            // console.log(response);
            setComicDetails(response.data.data.results[0]);
        }
        fetchCharacter();
    }, [id]);

    // set charcter selection to null when module is closed
    const closeDetails = () => {
        history.back();
    }

    // render module when a character is selected
  return (
    <>
    <NavBar/>
    {comicDetails &&
    <div className={styles.detailContainer}>
        <div className={styles.detailPane}>
            <div className={styles.windowHead}>
                <h3>Comic_{comicDetails.id}</h3>
                <button onClick={closeDetails}><h6>×</h6></button>
            </div>
            <div className={styles.windowBody}>
                <div className={styles.imageContainer}>
                    <img src={`${comicDetails.thumbnail.path}.${comicDetails.thumbnail.extension}`}/>
                </div>
                <div className={styles.textContainer}>
                    <h2>{comicDetails.title}</h2>

                    {/*  */}
                    {comicDetails.creators.items.length > 0 &&
                        <div>
                            <p>Creators:</p>
                            <ul>
                            {comicDetails.creators.items.map((creator => (
                                <li>{creator.name} ({creator.role})</li>
                            )))}
                            </ul>
                        </div>
                    }

                    {/* Show description if available */}
                    {comicDetails.description === '' ?
                        <p>Description not available.</p>:
                        <p>Description: {comicDetails.description}</p>
                    }

                </div>
            </div>
        </div>
    </div>}
    </>
  )
}

export default ComicDetails