import { createSlice } from "@reduxjs/toolkit";
import { fetchMedicine, fetchShopsName, postOrder } from "./shopOperations";
import {
    addToCartHelper,
    addToOrderHelper,
    addToOrderMedicinesHelper,
    deleteFromCartHelper,
    fetchDrugsHandleFulfilled,
    fetchShopsHandleFulfilled,
    handlePending,
    handleRejected,
} from "./helpers";
import { initialState } from "./initialState";

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        addToCart: addToCartHelper,
        deleteFromCart: deleteFromCartHelper,
        addToOrderMedicine: addToOrderMedicinesHelper,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchShopsName.fulfilled, fetchShopsHandleFulfilled)
            .addCase(fetchMedicine.fulfilled, fetchDrugsHandleFulfilled)
            .addCase(postOrder.fulfilled, addToOrderHelper)
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                handlePending
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                handleRejected
            );
    },
});

export const { addToCart, deleteFromCart, addToOrderMedicine } =
    shopSlice.actions;
export const shopReducer = shopSlice.reducer;
