import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import screenMarket from './components/screens/screenMarket';
import screenMypage from './components/screens/screenMypage';
import screenNavigate from './components/screens/screenNavigate';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator()

//const 

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName = "Navigate"
          tabBarOptions={{
            tintColor: '#CCCCCC',
            activeTintColor: '#e91e63',
            inactiveTintColor: 'gray',
            showIcon: true
          }}
          screenOptions = { ({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name == 'Navigate') {
                iconName = focused ? 'ios-navigate-circle' : 'ios-navigate-circle-outline';
              } else if (route.name == 'Market') {
                iconName = focused ? 'ios-basket' : 'ios-basket-outline';
              } else if (route.name == 'Mypage') {
                iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
              } 

              return <Ionicons name={iconName} color={color} size={size} />
            }
          })
          }
          >
          <Tab.Screen name = "Navigate" component = {screenNavigate} />
          <Tab.Screen name = "Market" component = {screenMarket} />
          <Tab.Screen name = "Mypage" component = {screenMypage}  />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
