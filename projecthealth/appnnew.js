import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './component/screen/HomeScreen';
import DoctorPortfolioScreen from './component/screen/DoctorPortfolioScreen';
import { createStackNavigator } from '@react-navigation/native-stack';

const screens = [
  { name: 'Home', component: HomeScreen },
  { name: 'portfolio', component: DoctorPortfolioScreen }
];

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
