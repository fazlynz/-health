import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DoctorPage = ({ route }) => {
  const { doctor } = route.params;

  const handleBookAppointment = () => {
    // Logic to book appointment for the selected doctor
    // Example: navigation.navigate('BookAppointment', { doctor });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Doctor's Name: {doctor.name}</Text>
      <Text>Hospital: {doctor.hospital}</Text>
      <TouchableOpacity onPress={handleBookAppointment}>
        <Text>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoctorPage;
