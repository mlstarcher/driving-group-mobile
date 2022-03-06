import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'

export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setFirstName(text)}
          value={firstName}
          placeholder="First Name"
        >
        </TextInput>
        <TextInput
          style={styles.input}
          onChangeText={text => setLastName(text)}
          value={lastName}
          placeholder="Last Name"
        >
        </TextInput>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmailAddress(text)}
          value={emailAddress}
          placeholder="Email Address"
        >
        </TextInput>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Password"
        >
        </TextInput>
        <TextInput
          style={styles.input}
          onChangeText={text => setPasswordConfirmation(text)}
          value={passwordConfirmation}
          placeholder="Confirm Password"
        >
        </TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}
          >Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
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
    opacity: 0.15,
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
    height: 50,
    backgroundColor: "#324BD9",
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  input: {
    fontSize: 16,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    width: 360,
    marginBottom: 20,
    padding: 10,
  }
});
