import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home/index';
import Fav from './Fav/index';
import Not from './Not/index';
import Settings from './Settings/index';

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

export const FavStack = createNativeStackNavigator();

function FavStackScreen({ navigation }) {
return (
    <FavStack.Navigator screenOptions={{
    headerShown: false
    }}>
          <FavStack.Screen name="Fav" component={Fav} />
    </FavStack.Navigator>
);
}

export const NotStack = createNativeStackNavigator();

function NotStackScreen({ navigation }) {
return (
    <NotStack.Navigator screenOptions={{
    headerShown: false
    }}>
          <NotStack.Screen name="Not" component={Not} />
    </NotStack.Navigator>
);
}

export const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen({ navigation }) {
return (
    <SettingsStack.Navigator screenOptions={{
    headerShown: false
    }}>
          <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
);
}


export {HomeStackScreen,FavStackScreen,NotStackScreen,SettingsStackScreen};