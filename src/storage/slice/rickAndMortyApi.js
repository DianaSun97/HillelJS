import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const Slice = createSlice({
    name: "rickmorty",
    initialState: {
        listEpisodesLoad: true,
        listCharLoad: true,
        listEpisodePage: {
            prev: null,
            next: null,
        },
        listCharPage: {
            prev: null,
            next: null,
        },
        listEpisode: [],
        listChar: [],
        selectedChar: {},
    },
    reducers: {
        getCharacter: (state, action) => {
            console.log('hero', state, action);
            const data = action.payload;
            state.listCharLoad = false;
            state.listChar = data.results;
            state.listCharPage = data.info;
        },
        getEpisodeList: (state, action) => {
            console.log('episodes', action);
            const data = action.payload;
            state.listEpisodesLoad = false;
            state.listEpisode = data.results;
            state.listEpisodePage = data.info;
        },
        selectChar: (state, action) => {
            console.log('char', state, action);
            state.selectedChar = action.payload;
        },
    },
});

export const {
    getCharacter,
    getEpisodeList,
    selectChar } = Slice.actions;

export const getCharacterAsync = (url) => (dispatch) => {
    axios.get(url).then((resp) => {
        dispatch(getCharacter(resp.data));
    });
};

export const getEpisodeLisAsync = (url) => (dispatch) => {
    axios.get(url).then((resp) => {
        dispatch(getEpisodeList(resp.data));
    });
};

export const getCharacterByIdAsync = (id) => (dispatch) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((resp) => {
        const selectedHero = resp.data;
        dispatch(selectChar(selectedHero));
    });
};

export const selectCharInfo = (state) => state.rickmorty.selectedChar;
export const selectCharList = (state) => state.rickmorty.listChar;
export const selectCharListPage = (state) => state.rickmorty.listCharPage;
export const selectEpisodesList = (state) => state.rickmorty.listEpisode;
export const selectEpisodesListLoad = (state) => state.rickmorty.listEpisodesLoad;
export const selectCharListLoad = (state) => state.rickmorty.listCharLoad;
export const selectEpisodesListPage = (state) => state.rickmorty.listEpisodePage;

export default Slice.reducer;