export const addHandleFulfilled = (state, action) => {
    state.favorite.push(action.payload);
};

export const deleteHandleFulfilled = (state, action) => {
    state.favorite = state.favorite.filter(
        (med) => med.id !== action.payload.id
    );
};
