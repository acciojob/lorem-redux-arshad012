import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import regeneratorRuntime from 'regenerator-Runtime'

export const fetchLorem = createAsyncThunk('fetch/lorem', 
    async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        return res.json();
    }
)

const loremSlice = createSlice({
    name: 'lorem',
    initialState: {
        lorems: [],
        status: 'idle',
        error:null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLorem.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLorem.fulfilled, (state, action) => {
                state.lorems = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchLorem.rejected, (state) => {
                state.status = 'failed';
                state.error = true;
            })
    },
})

export default loremSlice.reducer;