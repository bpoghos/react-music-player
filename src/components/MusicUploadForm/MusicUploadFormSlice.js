import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    songsArray: [],
    filteredSongs: [],
    loading: false,
    error: null
}

export const musicUploadFormSlice = createSlice({
    name: "songsArray",
    initialState,
    reducers: {
        addMusicItem: (state, action) => {
            state.songsArray.push(action.payload);
            state.loading = false
            state.error = null
        },
        setLoading: (state, action) => {
            state.loading = action.payload
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false
        },
        search: (state, action) => {
            state.filteredSongs = state.songsArray.filter((song) => song.file.name.toLowerCase().includes(action.payload.toLowerCase()))
        },
        sorting: (state, action) => {
            state.songsArray.sort((a, b) => {
                if (action.payload === 'asc') {
                    return a.index - b.index;
                } else if (action.payload === 'desc') {
                    return b.index - a.index;
                } else {
                    return 0;
                }
            });
        },
        remove: (state, action) => {
            state.songsArray = state.songsArray.filter((s) => s.index !== action.payload);
        }
    }
});

export const { addMusicItem, setLoading, setError, search, sorting, remove } = musicUploadFormSlice.actions;


export default musicUploadFormSlice.reducer;