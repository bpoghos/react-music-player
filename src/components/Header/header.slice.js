import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    search: "",
    loading: false,
    error: null
}

export const headerSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        }
    }
});

export const { setSearch } = headerSlice.actions;


export default headerSlice.reducer;