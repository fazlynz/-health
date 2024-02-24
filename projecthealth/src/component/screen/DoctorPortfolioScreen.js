import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import { useNavigation } from '@react-navigation/native';

const DoctorPortfolioScreen = () => {
  const navigation = useNavigation();

  const handleMakeAppointment = () => {
    navigation.navigate('SetAppointment');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png' }} // Replace with the actual image URL of the doctor
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.specialty}>Cardiologist</Text>
          <Text style={styles.hospital}>City Hospital</Text>
        </View>
      </View>
      <View style={styles.additionalInfo}>
        <Text style={styles.additionalInfoTitle}>About Me</Text>
        <Text style={styles.additionalInfoText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac turpis commodo semper.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name="video-camera" size={30} color="red" />
          <Text style={styles.buttonText}>Start Video Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name="comment" size={30} color="blue" />
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name="envelope" size={30} color="black" />
          <Text style={styles.buttonText}>Send Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name="user" size={30} color="green" />
          <Text style={styles.buttonText}>View Rating</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.makeAppointmentButton} onPress={handleMakeAppointment}>
        <Text style={styles.makeAppointmentButtonText}>Make Appointment</Text>
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
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  specialty: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  hospital: {
    fontSize: 16,
    color: '#888',
  },
  additionalInfo: {
    marginTop: 20,
  },
  additionalInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  additionalInfoText: {
    fontSize: 16,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row-reverse', // Changed from 'row' to 'row-reverse'
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    marginRight: 10, // Changed from marginLeft to marginRight
    color: 'black',
  },
  makeAppointmentButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'center',
    marginTop: 10,
  },
  makeAppointmentButtonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center'
  },

  
});

export default DoctorPortfolioScreen;
