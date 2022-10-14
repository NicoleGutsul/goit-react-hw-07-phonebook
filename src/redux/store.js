import { rootReducer } from "./reduser";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: rootReducer,
});