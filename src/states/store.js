import { configureStore } from '@reduxjs/toolkit'
import amountReducer from './reducers/amountReducer'
import bonusReducer from './reducers/bonusReducer'

export default configureStore({
    reducer:{
        amount: amountReducer,
        bonus: bonusReducer
    }
})