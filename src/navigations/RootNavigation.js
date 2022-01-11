import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../screens/main/Main';
import Ledger from '../screens/ledger';
import Write from '../screens/ledger/write';
import Health from '../screens/health';
import Socket from '../screens/socket';
import Geo from '../screens/gps';

export const MAIN = 'MAIN';
export const LEDGER = 'LEDGER';
export const LEDGER_WRITE = 'LEDGER_WRITE';
export const HEALTH = 'HEALTH';
export const SOCKET = 'SOCKET';
export const GEO = 'GEO';


const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={MAIN}>
        <Stack.Screen
          name={MAIN}
          component={Main}
          options={{ headerShown: false }}
        />
        {/* Ledger */}
        <Stack.Screen
          name={LEDGER}
          component={Ledger}
          options={{ title: '가계부' }}
        />
        <Stack.Screen name={LEDGER_WRITE} component={Write} />
        {/* Health */}
        <Stack.Screen
          name={HEALTH}
          component={Health}
          options={{ title: '가계부' }}
        />
        {/* test socket */}
        <Stack.Screen
          name={SOCKET}
          component={Socket}
          options={{ title: '소켓' }}
        />
        {/* test geolocation */}
        <Stack.Screen
          name={GEO}
          component={Geo}
          options={{ title: '소켓' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
