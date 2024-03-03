import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
import { addHandleFulfilled, deleteHandleFulfilled } from "./favorite-helpers";

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite: addHandleFulfilled,
        deleteFromFavorite: deleteHandleFulfilled,
    },
});

export const { addToFavorite, deleteFromFavorite } = favoriteSlice.actions;
