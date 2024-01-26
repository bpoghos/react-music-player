import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { search, sorting } from '../MusicUploadForm/MusicUploadFormSlice'
import { setSearch } from './header.slice'
import AddAllButton from '../AddAllButton/AddAllButton'
import MusicUploadForm from '../MusicUploadForm/MusicUploadForm'
import PlayAllButton from '../PlayAllButton/PlayAllButton'
import { FaArrowDownShortWide, FaArrowDownWideShort } from 'react-icons/fa6'

import './styles.css'

const Header = () => {

    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch()
    const { songsArray } = useSelector(state => state.songs)

    // function to handle sorting button click
    const sortingClicked = () => {
        setClicked((prevState) => !prevState)
    }

    return (
        <header className='header'>
            <PlayAllButton />
            <AddAllButton />
            <MusicUploadForm />
            <button
                disabled={songsArray.length < 1}
                className='sort-button'
                onClick={() => {
                    sortingClicked()
                    dispatch(sorting(clicked ? 'asc' : 'desc'))
                }}
            >
                Sort
                {
                    clicked ? <FaArrowDownShortWide className='short-wide' /> : <FaArrowDownWideShort className='wind-short' />
                }
            </button>
            <input placeholder='search' className='search' onChange={(e) => {
                dispatch(setSearch(e.target.value))
                dispatch(search(e.target.value))
            }} />
        </header>
    )
}

export default Header