import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DoctorPortfolioScreen from './DoctorPortfolioScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DoctorPortfolioScreen" component={DoctorPortfolioScreen} />
      {/* Add more screens here if needed */}
    </Stack.Navigator>
  );
};

export default RootNavigator;