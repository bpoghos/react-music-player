
import { useSelector } from 'react-redux';
import SongRow from './SongRow/SongRow'
import './styles.css'

const SongList = () => {

    const { songsArray } = useSelector((state) => state.songs)
    const { filteredSongs } = useSelector((state) => state.songs)
    const { search } = useSelector((state) => state.header)

    // determine the list of songs based on search query
    const songs = search.length ? filteredSongs : songsArray

    return (
        <div className='song-list'>
            <header className='song-list-header'>
                <div className='header-start'></div>
                <div className='song-name'>Song Name</div>
                <div className='artist-name'>Artist Name</div>
                <div className='track'>Track</div>
                <div className='header-end'></div>
            </header>
            {
                !songsArray.length ? <p>No Songs</p> :

                    (
                        songs.map((d) => {
                            return <SongRow key={d.file.name} data={d} index={d.index} />
                        })
                    )
            }
        </div>
    )
}

export default SongList
