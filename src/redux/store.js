import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoriteSlice } from "./favorite/favorite-slice";
import { shopReducer } from "./shop/shopSlice";

const favoritePersistConfig = {
    key: "favorite",
    storage,
    whitelist: ["favorite"],
};

export const store = configureStore({
    reducer: {
        shop: shopReducer,
        favorite: persistReducer(favoritePersistConfig, favoriteSlice.reducer),
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        });
    },
});

export const persistor = persistStore(store);
