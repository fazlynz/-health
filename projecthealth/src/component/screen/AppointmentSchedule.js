import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const AppointmentScheduleScreen = () => {
  // Sample appointment data
  const [appointments, setAppointments] = useState([
    { id: '1', time: '9:00 AM', doctor: 'Dr. John Doe', specialty: 'Cardiologist' },
    { id: '2', time: '10:00 AM', doctor: 'Dr. Jane Smith', specialty: 'Dermatologist' },
    { id: '3', time: '11:00 AM', doctor: 'Dr. Michael Johnson', specialty: 'Neurologist' },
    // Add more appointments as needed
  ]);

  // Function to handle appointment selection
  const handleAppointmentSelect = (appointment) => {
    // Logic to handle appointment selection
    console.log('Selected appointment:', appointment);
  };

  // Render each appointment item
  const renderAppointmentItem = ({ item }) => (
    <TouchableOpacity style={styles.appointmentItem} onPress={() => handleAppointmentSelect(item)}>
      <Text style={styles.appointmentTime}>{item.time}</Text>
      <Text style={styles.appointmentDoctor}>{item.doctor}</Text>
      <Text style={styles.appointmentSpecialty}>{item.specialty}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Appointment Schedule</Text>
      <FlatList
        data={appointments}
        renderItem={renderAppointmentItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.appointmentList}
      />
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
  appointmentList: {
    flexGrow: 1,
  },
  appointmentItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  appointmentTime: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  appointmentDoctor: {
    fontSize: 16,
    marginBottom: 5,
  },
  appointmentSpecialty: {
    fontSize: 14,
    color: '#666',
  },
});

export default AppointmentScheduleScreen;
