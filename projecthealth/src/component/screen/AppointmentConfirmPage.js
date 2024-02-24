import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import style from './src/assets/style';

const AppointmentConfirmPage = ({ route }) => {
  const { name, date, time } = route.params;
  const navigation = useNavigation();

  const handleBackToHome = () => {
    // Navigate back to the Home screen
    navigation.navigate('Home');
  };

  const handleLogout = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
  };


  return (
    
    
    <View style={styles.container}>
      <Text style={styles.header}>Appointment Details</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Dr. Name:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{date}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Time:</Text>
        <Text style={styles.value}>{time}</Text>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
        <Text style={styles.backButtonText}>Back to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    flex: 1,
  },
  backButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'center',
    marginTop: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center'
  },
});

export default AppointmentConfirmPage;
