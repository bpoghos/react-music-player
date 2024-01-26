import { configureStore } from "@reduxjs/toolkit";
import musicUploadFormReducer from "../components/MusicUploadForm/MusicUploadFormSlice";
import headerSlice from "../components/Header/header.slice";

export const store = configureStore({
    reducer: {
        songs: musicUploadFormReducer,
        header: headerSlice
    }
});
