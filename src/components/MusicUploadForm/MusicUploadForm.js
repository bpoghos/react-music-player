import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMusicItem, setLoading } from "./MusicUploadFormSlice";

import './styles.css'

const MusicUploadForm = () => {

    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.songs)
    const { songsArray } = useSelector((state) => state.songs)

    const [file, setFile] = useState('')
    const [track, setTrack] = useState(0)
    const fileInputRef = useRef(null);


    //function to handle file selection from the input
    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile)
    };

    //function to add a new song to the list
    const addSong = () => {
        // if a file is selected, set loading to true
        if (file) {
            dispatch(setLoading(true))
        }
        // simulate a delay before processing the file
        setTimeout(() => {
            const selectedFile = file;
            if (!selectedFile) {
                alert('Invalid file');
            } else {
                // check if the file already exists in the songsArray
                if (!songsArray.some((s) => s.file.name === selectedFile.name)) {
                    // dispatch action to add the new music item
                    dispatch(addMusicItem({ file: selectedFile, index: track }));
                    // increment index of song
                    setTrack((prev) => prev + 1);
                    console.log(`${selectedFile.name} song added`);
                } else {
                    alert('File already exist')
                    //set loading to false if the file already exists
                    dispatch(setLoading(false))
                }
            }
            // reset the selected file
            setFile('')
        }, 2000);
    }

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="music-upload-form">

            {
                loading ? <div className="loading"></div> :
                    (
                        <>
                            <button htmlFor="fileInput" className="plus-button" onClick={handleButtonClick}>+</button>
                            <input
                                type='file'
                                onChange={handleFileSelect}
                                accept="audio/mp3, audio/wav"
                                multiple
                                className="upload"
                                style={{ display: 'none' }}
                                ref={fileInputRef}
                                id="fileInput"
                            />
                            <p>{file.name}</p>
                            <button
                                disabled={!file}
                                onClick={addSong}
                                className={`add-button ${!file ? 'disabled' : ''}`}
                            >add</button>
                        </>
                    )
            }

        </div>
    )
}

export default MusicUploadForm
