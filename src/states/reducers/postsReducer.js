import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAllPost = createAsyncThunk(
  'allPost/getAll',
  async (thunkAPI) => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllPostReducer = createSlice({
  name: 'allPost',
  initialState: { posts: {}, pending: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPost.pending, (state) => {
        state.pending = true;
        state.error = null;
      })
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.pending = false;
        state.error = null;
      })
      .addCase(getAllPost.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      });
  },
});

export default getAllPostReducer.reducer;