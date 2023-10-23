import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

const store = configureStore({
    reducer: {
        state: reducer
    },
})

export default store