import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { configureStore } from '@reduxjs/toolkit'

import amountReducer from './amount'

export default configureStore({
    reducer: {
        amount: amountReducer
    }
})
