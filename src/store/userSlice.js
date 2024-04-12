import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  status: 'INITIALISED',
  email: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = action.payload;
      state.users.push(user);
      return state;
    },
    removeUser: (state, action) => {
      const userId = action.payload.id;
      state.users = state.users.filter(user => user.id !== userId);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'PENDING';
        state.email = '';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'COMPLETED';
        console.log('action ', action)
        state.email = action.payload.results[0].email
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'FAILED';
        state.email = '';
;      });
  },
})

export const fetchUserData = createAsyncThunk('user/fetchUser', async () => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  return data;
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;