import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import './styles.css'

// playAllButton component responsible for playing all available songs
const PlayAllButton = () => {

    const data = useSelector((state) => state.songs.songsArray)
    const audioElements = useRef([]);

    // function to play or pause all songs
    const playAll = () => {
        if (data.length === 0) {
            alert('No songs available.')
            return
        }
        if (audioElements.current.length === 0) {
            audioElements.current = data.map((song) => new Audio(URL.createObjectURL(song.file)));
            audioElements.current.forEach((audio) => audio.play());
        } else {
            audioElements.current.forEach((audio) => audio.pause());
            audioElements.current.length = 0

        }
    };

    return (
        <div>
            <button onClick={playAll} className='play-all-button'>PLay All Button</button>
        </div>
    )
}

export default PlayAllButton
