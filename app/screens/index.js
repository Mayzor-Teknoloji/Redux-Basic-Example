import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home/index';

export const HomeStack = createNativeStackNavigator();

function HomeStackScreen({ navigation }) {
return (
    <HomeStack.Navigator screenOptions={{
    headerShown: false
    }}>
          <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
);
}

export {HomeStackScreen};