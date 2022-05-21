import {configureStore}  from "@reduxjs/toolkit";
import Mathreducer from "./Mathreducer";
export default configureStore({
    reducer:{
        mathreducer:Mathreducer
    }
})
