import { configureStore } from '@reduxjs/toolkit';
import loremReducer from '../redux/loremSlice';

export const store = configureStore({
    reducer: {
        lorems:loremReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            thunk: true
        })
})