/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {Provider} from 'react-native-paper';
 import {NavigationContainer} from '@react-navigation/native';
 import {theme} from './core/theme';
 import MainStackNavigator from './navigator/StackNavigator';
 import 'localstorage-polyfill';

 const App = () => {
   return (
     <Provider theme={theme}>
       <NavigationContainer>
         <MainStackNavigator />
       </NavigationContainer>
     </Provider>
   );
 };

 export default App;
