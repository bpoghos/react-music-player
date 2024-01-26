import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import './styles.css'

// addAllButton component responsible for playing all available songs in order
const AddAllButton = () => {

    const data = useSelector((state) => state.songs.songsArray)
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioRef = useRef(new Audio());

    // function to play all songs in order
    const playSongsOrder = () => {
        if (data.length === 0) {
            alert('No songs available.');
            return;
        }
        audioRef.current.src = URL.createObjectURL(data[currentSongIndex].file);
        audioRef.current.play();
        audioRef.current.addEventListener('ended', () => {
            setCurrentSongIndex((prevIndex) => (prevIndex + 1) % data.length);
            audioRef.current.src = URL.createObjectURL(data[currentSongIndex].file);
            audioRef.current.play();
        });
    };

    return (
        <div>
            <button className='add-all-button' onClick={playSongsOrder}>Add All Button</button>
        </div>
    )
}

export default AddAllButton
