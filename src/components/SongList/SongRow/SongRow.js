import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BsFillHeartFill, BsFillPauseFill, BsFillTrash2Fill, BsPlayFill } from 'react-icons/bs'
import { remove } from '../../MusicUploadForm/MusicUploadFormSlice'
import './styles.css'

const SongRow = ({ data, index }) => {

    const dispatch = useDispatch()

    const [clicked, setClicked] = useState(false)
    const [favorite, setFavorite] = useState(false)
    const [song, setSong] = useState(new Audio());

    // function to handle play button click
    const handlePlayClick = () => {
        setClicked((prevState) => !prevState);
    };

    // function to handle favorite button click
    const handleFavoriteClicked = () => {
        setFavorite((prevState) => !prevState)
        console.log("love this song:", data.file.name);
    }

    // function to handle remove song
    const handleRemoveSong = () => {
        dispatch(remove(data.index))
        console.log(`${data.file.name} song removed`);
    }

    // uesEffect to handle audio playback when play button is clicked
    useEffect(() => {
        if (!song.src) {
            setSong(new Audio(URL.createObjectURL(data.file)));
        }
        if (clicked) {
            song.play();
            console.log(`${data.file.name} song playing...`);
        } else {
            song.pause();
        }
    }, [clicked, data.file, song]);

    return (

        <div className='song-row'>
            <div className='menu-play-buttons'>
                {clicked ? (<BsFillPauseFill onClick={handlePlayClick} className='pause' />)
                    :
                    (<BsPlayFill onClick={handlePlayClick} className='play' />)}
            </div>
            <div className='song-name-row'>{data.file.name}</div>
            <div className='artist-name-row'>Blackbird Blackbird</div>
            <div className='track-row'>{index + 1}</div>
            <div className='favorite-check-buttons'>
                {
                    favorite ?
                        (<BsFillHeartFill onClick={handleFavoriteClicked} style={{ color: "#ff0000" }} />)
                        :
                        (<BsFillHeartFill onClick={handleFavoriteClicked} />)
                }
                <BsFillTrash2Fill onClick={handleRemoveSong} style={{ color: "#ff0000" }} />
            </div>

        </div>
    )
}

export default SongRow
