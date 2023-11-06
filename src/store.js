import { configureStore } from "@reduxjs/toolkit";
import listReducer from './slices/slices'

export const store = configureStore({
    reducer: {
        list:listReducer
    },
    devTools: true,
})