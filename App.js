import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeStackScreen,FavStackScreen,NotStackScreen,SettingsStackScreen} from './app/screens';
import {Provider} from 'react-redux';
import styles from './app/assets/style/style'

const Tab = createBottomTabNavigator();

const TabScreens = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel:false,
      tabBarActiveTintColor: '#171640',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle:[{backgroundColor:'#171640'}]
    }}>
          <Tab.Screen name={'Home'}  component={HomeStackScreen}  options={{
      tabBarIcon: ({ focused }) => {const image = focused
        ? require('./app/assets/images/altmenu/home.png')
        : require('./app/assets/images/altmenu/home.png');return <Image style={styles.tabBarIcons} source={image} />}}}/>
          <Tab.Screen name={'Fav'}  component={FavStackScreen}  options={{
      tabBarIcon: ({ focused }) => {const image = focused
        ? require('./app/assets/images/altmenu/fav.png')
        : require('./app/assets/images/altmenu/fav.png');return <Image style={styles.tabBarIcons} source={image} />}}}/>
          <Tab.Screen name={'Not'}  component={NotStackScreen}  options={{
      tabBarIcon: ({ focused }) => {const image = focused
        ? require('./app/assets/images/altmenu/not.png')
        : require('./app/assets/images/altmenu/not.png');return <Image style={styles.tabBarIcons} source={image} />}}}/>
          <Tab.Screen name={'Settings'} component={SettingsStackScreen}  options={{
      tabBarIcon: ({ focused }) => {const image = focused
        ? require('./app/assets/images/altmenu/person.png')
        : require('./app/assets/images/altmenu/person.png');return <Image style={styles.tabBarIcons} source={image} />}}}/>
    </Tab.Navigator>
  );
};

export const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen
            name="TabScreens"
            component={TabScreens} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}