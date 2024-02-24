import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate email and password
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter your email and password.');
      return;
    }
    // Perform login logic (e.g., call API)
    console.log('Logging in...');
    // Reset form
    setEmail('');
    setPassword('');
    // Navigate to another screen (e.g., HomeScreen)
    // navigation.navigate('Home');
  };

  const handleRegister = () => {
    // Navigate to the registration screen
    navigation.navigate('register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
           source={{ uri: 'https://image.similarpng.com/very-thumbnail/2022/01/Medical-logo-design-template-on-transparent-background-PNG.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.welcomeText}>Medicare, Getting Medical Advice & Support from home is super easy!</Text>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Not registered yet? </Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={[styles.registerText, styles.registerLink]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 200, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'green',
    width: '100%',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  registerText: {
    fontSize: 16,
  },
  registerLink: {
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
