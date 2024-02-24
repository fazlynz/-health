import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/component/screen/HomeScreen';
import DoctorPortfolioScreen from './src/component/screen/DoctorPortfolioScreen';
import SetAppointment from './src/component/screen/SetAppointment';
import Login from './src/component/screen/Login';
import register from './src/component/screen/register';
import AppointmentConfirmPage from './src/component/screen/AppointmentConfirmPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DoctorPortfolioScreen" component={DoctorPortfolioScreen} />
        <Stack.Screen name="SetAppointment" component={SetAppointment} />
        <Stack.Screen name="AppointmentConfirmPage" component={AppointmentConfirmPage}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="register" component={register} />
        {/* Add more screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
