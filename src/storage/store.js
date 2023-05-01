import { configureStore } from "@reduxjs/toolkit";
import Slice from "./slice/rickAndMortyApi";

export const store = configureStore({
    reducer: {
        rickmorty: Slice
    },
});