import {createSlice} from "@reduxjs/toolkit";

export const Mathreducer=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        },
        incrementByAmount:(state,action)=>{
            state.count+=action.payload
        }
    }
});

export const {increment,decrement,incrementByAmount}=Mathreducer.actions;
export default Mathreducer.reducer;