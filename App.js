import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeStackScreen} from './app/screens';
import {Provider} from 'react-redux';
import styles from './app/assets/style/style'
import {store} from './app/redux/store';


export const Stack = createNativeStackNavigator();


export default function App() {
  return (
     <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen
            name="HomeStackScreen"
            component={HomeStackScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}