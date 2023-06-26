import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getPostByID = createAsyncThunk(
  'postByID/getPost',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const postByIDReducer = createSlice({
  name: 'postByID',
  initialState: { post: {}, pending: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostByID.pending, (state) => {
        state.pending = true;
        state.error = null;
      })
      .addCase(getPostByID.fulfilled, (state, action) => {
        state.post = action.payload;
        state.pending = false;
        state.error = null;
      })
      .addCase(getPostByID.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      });
  },
});

export default postByIDReducer.reducer;
