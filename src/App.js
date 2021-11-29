import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import store from './modules'
import Main from './screens/main/Main'

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Main />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App

