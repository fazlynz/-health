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
      backgroundColor: 'blue',
      borderRadius: 5,
    },
    logoutButtonText: {
      color: 'white',
      fontSize: 16,
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
      backgroundColor: 'blue',
      borderRadius: 5,
      padding: 10,
    },
    specialtyContainer: {
      marginBottom: 20,
    },
    specialtyHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    specialties: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    specialtyItem: {
      backgroundColor: '#f0f0f0',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginRight: 10,
      marginBottom: 10,
    },
    specialtyText: {
      fontSize: 16,
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