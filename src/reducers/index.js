import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./counterReducer";

export default combineReducers({
   enterVal:counterReducer
})