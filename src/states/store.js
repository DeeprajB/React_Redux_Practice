import { configureStore } from '@reduxjs/toolkit'

import getAllPostReducer from './reducers/postsReducer'

import { postByIDApi } from '../api/postByIDSlice'


export default configureStore({
    reducer:{
        getAllPost: getAllPostReducer,
        [postByIDApi.reducerPath]:postByIDApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postByIDApi.middleware)
})