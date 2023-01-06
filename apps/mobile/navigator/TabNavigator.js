import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ServicesStackNavigator,
  FunctionsStackNavigator,
  ParamsStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Services"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Services"
        component={ServicesStackNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/services.png')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Functions"
        component={FunctionsStackNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/functions.png')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Parameters"
        component={ParamsStackNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/params.png')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
