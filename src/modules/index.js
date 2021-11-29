import { configureStore } from '@reduxjs/toolkit'

import amountReducer from './amount'

export default configureStore({
    reducer: {
        amount: amountReducer
    }
})
