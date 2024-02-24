import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
//import style from './src/assets/style';

const SetAppointmentDateScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const navigation = useNavigation();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    // Logic to handle the selected date and time
    console.log('Selected date:', selectedDate);
    console.log('Selected time:', selectedTime);
    // Navigate to the confirmation page
    navigation.navigate('AppointmentConfirmPage', { date: selectedDate, time: selectedTime });
  };

  // Predefined time slots
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Date</Text>
      <Calendar
        current={selectedDate}
        onDayPress={(day) => handleDateChange(day.dateString)}
        style={styles.calendar}
        theme={{
          todayTextColor: 'blue',
          selectedDayBackgroundColor: 'green',
          arrowColor: 'black',
        }}
      />
      <Text style={styles.timeSlotsHeaderText}>Time Slots</Text>
      <View style={styles.timeSlotsContainer}>
        {timeSlots.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.timeSlotButton, { backgroundColor: selectedTime === time ? 'blue' : '#f0f0f0' }]}
            onPress={() => handleTimeSelection(time)}
          >
            <Text style={[styles.buttonText, { color: selectedTime === time ? 'white' : 'black' }]}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm Appointment</Text>
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
  calendar: {
    marginBottom: 20,
  },
  timeSlotsHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  timeSlotButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'center',
    marginTop: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center'
  },
});

export default SetAppointmentDateScreen;
