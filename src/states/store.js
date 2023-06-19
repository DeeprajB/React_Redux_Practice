import { configureStore } from '@reduxjs/toolkit'
import newReducer from './reducers/index'

export default configureStore({
    reducer:{
        number: newReducer
    }
})