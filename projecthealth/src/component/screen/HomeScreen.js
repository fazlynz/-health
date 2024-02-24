import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import openDoorIcon from '.../src/assets/image/logoutIcon';  
//import openDoorIcon from '../../assets/image/logout_icon2.jpg';
//import style from './src/assets/style'


const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const topDoctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiologist', hospital: 'City Hospital', imageUrl: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png' },
    { name: 'Dr. Jane Smith', specialty: 'Dermatologist', hospital: 'Central Clinic', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1912/1912304.png' },
    { name: 'Dr. Michael Johnson', specialty: 'Neurologist', hospital: 'Medical Center', imageUrl: 'https://cdn-icons-png.flaticon.com/512/9193/9193824.png' },
    // Add more top doctors as needed
  ];

  const handleSearch = () => {
    const filtered = topDoctors.filter(
      (doctor) =>
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  const handleLogout = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
  };

  const handleBookAppointment = () => {
    // Navigate to the DoctorPortfolioScreen
    navigation.navigate('DoctorPortfolioScreen');
  };

  const renderDoctorItem = ({ item }) => (
    <View style={styles.doctorItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.doctorImage} />
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{item.name}</Text>
        <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
        <Text style={styles.doctorHospital}>{item.hospital}</Text>
        <TouchableOpacity style={styles.bookAppointmentButton} onPress={handleBookAppointment}>
          <Text style={styles.bookAppointmentButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9wHi_y_Lcm9rpA25LuHcu50jrDgwNTLAAkXNLiF5LQ&s' }} style={styles.userIcon} />
        <Text style={styles.greetingText}>Hello, User!</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
      <Image source={{ uri: 'https://static-00.iconduck.com/assets.00/logout-icon-2048x2048-libuexip.png' }} style={styles.logoutIcon} />

      </TouchableOpacity>
      <Text style={styles.header}>Find a Doctor</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a medical specialty"
          placeholderTextColor="#777"
          onChangeText={(text) => setSearchQuery(text)} // Handle input text change
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={{ color: 'green' }}>🔍</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topDoctorsContainer}>
        <Text style={styles.topDoctorsHeader}>Top Doctors</Text>
        <FlatList
          data={searchQuery ? filteredDoctors : topDoctors}
          renderItem={renderDoctorItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },
  logoutIcon: {
    width: 24,
    height: 24,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  greetingText: {
    fontSize: 18,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  topDoctorsContainer: {
    marginTop: 20,
  },
  topDoctorsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  doctorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D4E6F1',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    fontSize: 16,
    marginBottom: 5,
  },
  doctorHospital: {
    fontSize: 14,
    color: '#666',
  },
  bookAppointmentButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'center',
    marginTop: 10,
  },
  bookAppointmentButtonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default HomeScreen;
