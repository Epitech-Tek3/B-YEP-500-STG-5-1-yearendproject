import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './TabNavigator';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  Services,
  Functions,
  Params,
  GoogleFeatures,
  DiscordFeatures,
  GithubFeatures,
  TwitchFeatures, LoginGoogle, LoginService, LoginServiceGoogle, Reaction,
} from '../screens';
import SpotifyFeatures from "../screens/features/SpotifyFeatures";
import DiscordReaction from "../screens/reactions/DiscordReaction";
import GoogleReaction from "../screens/reactions/GoogleReaction";
import MicrosoftReaction from "../screens/reactions/MicrosoftReaction";
import SpotifyReaction from "../screens/reactions/SpotifyReaction";

const Stack = createStackNavigator();

export const ServicesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="StackServices"
        component={Services}
        options={{headerLeft: props => null}}
      />
    </Stack.Navigator>
  );
};
export const FunctionsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="StackFunctions"
        component={Functions}
        options={{headerLeft: props => null}}
      />
    </Stack.Navigator>
  );
};
export const ParamsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="StackParameters"
        component={Params}
        options={{headerLeft: props => null}}
      />
    </Stack.Navigator>
  );
};

let MainStackNavigator;
export default MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="GoogleFeatures" component={GoogleFeatures} />
      <Stack.Screen name="DiscordFeatures" component={DiscordFeatures} />
      <Stack.Screen name="GithubFeatures" component={GithubFeatures} />
      <Stack.Screen name="SpotifyFeatures" component={SpotifyFeatures} />
      <Stack.Screen name="TwitchFeatures" component={TwitchFeatures} />
      <Stack.Screen name={"LoginGoogle"} component={LoginGoogle} />
      <Stack.Screen name={"LoginService"} component={LoginService} />
      <Stack.Screen name={"LoginServiceGoogle"} component={LoginServiceGoogle} />
      <Stack.Screen name={"Reaction"} component={Reaction} />
      <Stack.Screen name="DiscordReaction" component={DiscordReaction} />
      <Stack.Screen name="GoogleReaction" component={GoogleReaction} />
      <Stack.Screen name="MicrosoftReaction" component={MicrosoftReaction} />
      <Stack.Screen name="SpotifyReaction" component={SpotifyReaction} />
    </Stack.Navigator>
  );
};
