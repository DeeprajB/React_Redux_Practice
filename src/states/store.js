import { configureStore } from '@reduxjs/toolkit'
import postByIDReducer from './reducers/postByIDReducer'
import getAllPostReducer from './reducers/postsReducer'

export default configureStore({
    reducer:{
        postByID: postByIDReducer,
        getAllPost: getAllPostReducer
    }
})