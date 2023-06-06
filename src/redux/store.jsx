import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    mode : "light"
}

const toggle = createSlice({
    name : "display-mode",
    initialState : initialState,
    reducers : {
        change : (initialState,e)=>{
            return {...initialState, mode:e.payload}
        }
    }
})

export const {change} = toggle.actions;

const store = configureStore({
    reducer :{
        toggle : toggle.reducer
    }
})

export default store;