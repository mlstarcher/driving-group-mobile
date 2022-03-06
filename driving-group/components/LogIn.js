import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableOpacity, View, Button, TextInput } from 'react-native';

import logo from '../assets/logo.png';

export default function LogIn({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.welcome}>Welcome to Driving
          Group</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setUsername(text)}
          value={username}
          placeholder="Username"
        >
        </TextInput>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Password"
        >
        </TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
          >
          <Text style={styles.buttonText}
          >Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}
          >
          <Text style={styles.buttonText}
          >Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 160,
    paddingHorizontal: 15,
    opacity: 0.1,
  },
  welcome: {
    color: '#888',
    fontSize: 22,
    marginHorizontal: 15,
    marginTop: 20,
  },
  formContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    width: 360,
    marginBottom: 20,
    padding: 10,
  }
});
