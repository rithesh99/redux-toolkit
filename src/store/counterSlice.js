import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  randomNumber: 0,
  status: 'INITIALISED'
}

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    addCount: (state, action) => {
      state.count = state.count + 1;
      return state;
    },
    reduceCount: (state, action) => {
      state.count = state.count - 1;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'PENDING';
        state.randomNumber = 0;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'COMPLETED';
        const number = action.payload.results.length;
        state.randomNumber = number;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'FAILED';
        state.randomNumber = 0;
      });
  },
})

export const fetchUserData = createAsyncThunk('count/fetchUser', async () => {
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const number = randomIntFromInterval(1,10)
  const response = await fetch(`https://randomuser.me/api/?results=${number}`);
  const data = await response.json();
  return data;
});

export const { addCount, reduceCount } = counterSlice.actions;
export const countValue  = (state) => state.count;
export default counterSlice.reducer;