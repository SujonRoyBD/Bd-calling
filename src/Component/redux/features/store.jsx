import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cartsReducer } from "./carts/cartsSlice";


export const store = configureStore({
    reducer: {
        carts: cartsReducer,
    },
});

setupListeners(store.dispatch);