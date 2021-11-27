import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import store from './modules'
import Main from './screens/main/Main'

const App = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
}

export default App

