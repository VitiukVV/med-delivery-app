export const handlePending = (state) => {
    state.isLoading = true;
};

export const fetchShopsHandleFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.allPharmacy = action.payload;
};

export const fetchDrugsHandleFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.allDrugs = action.payload[0].medicines;
};

export const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const addToCartHelper = (state, { payload }) => {
    state.drugsInCart.push(payload);
};

export const deleteFromCartHelper = (state, { payload }) => {
    state.drugsInCart = state.drugsInCart.filter((drug) => drug.id !== payload);
};

export const addToOrderMedicinesHelper = (state, { payload }) => {
    state.drugsInCart = state.drugsInCart.map((drug) =>
        drug.id === payload.id ? { ...drug, quantity: payload.quantity } : drug
    );
};

export const addToOrderHelper = (state, { payload }) => {
    state.order.push(payload);
};