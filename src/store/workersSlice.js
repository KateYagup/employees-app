import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';


export const fetchWorkers = createAsyncThunk(
    'workers/fetchWorkers',
    async function () {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data;
    }
)

const workersSlice = createSlice({
    name: 'workers',
    initialState: {
        workers: [],
        workersTransormed: [],
    },
    reducers: {
        initiateWorkersTransformed(state, action) {
            state.workersTransormed = state.workers;
        },
        filterPositionAnalyst(state, action) {
            // fetchWorkers();
            console.log(state);
            console.log(action);
            console.log('filterPositionAnalyst');
            console.log(action.payload);
            // state.workersTransormed = state.workers.filter(worker => (worker.position === 'analyst'));
            // state.workersTransormed.length = 0;
            // state.workersTransormed.push(state.workers.filter(worker => (worker.position === 'analyst')));
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchWorkers.pending, (state) => {
            state.status = 'in progress'
        })
            .addCase(fetchWorkers.fulfilled, (state, action) => {
                state.status = 'succes';
                state.workers = action.payload;
            })
    }
})

export const { filterPositionAnalyst } = workersSlice.actions;
export default workersSlice.reducer;