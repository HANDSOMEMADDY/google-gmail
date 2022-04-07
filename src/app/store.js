import { configureStore } from "@reduxjs/toolkit";
import mailReducer from '../features/UserSlice';

export default configureStore({
    reducer:{
        mail:mailReducer,
    },
})
