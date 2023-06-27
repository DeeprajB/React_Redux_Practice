import { configureStore } from '@reduxjs/toolkit'

import { postByIDApi } from '../api/postByIDSlice'
import { postsApi } from '../api/postsSlice'


export default configureStore({
    reducer:{
        [postsApi.reducerPath]:postsApi.reducer,
        [postByIDApi.reducerPath]:postByIDApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postByIDApi.middleware).concat(postsApi.middleware)
})