import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from '../screens/main/Main';
import Ledger from '../screens/ledger';
import Write from '../screens/ledger/write';
import Card from '../screens/card/Card';

export const MAIN = 'MAIN';
export const LEDGER = 'LEDGER';
export const LEDGER_WRITE = 'LEDGER_WRITE';

export const CARD = 'CARD';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={MAIN}>
        <Stack.Screen
          name={MAIN}
          component={Main}
          options={{headerShown: false}}
        />
        {/* Ledger */}
        <Stack.Screen
          name={LEDGER}
          component={Ledger}
          options={{title: '가계부'}}
        />
        <Stack.Screen name={LEDGER_WRITE} component={Write} />
        {/* 테스트 */}
        <Stack.Screen
          name={CARD}
          component={Card}
          options={{title: '가계부'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
