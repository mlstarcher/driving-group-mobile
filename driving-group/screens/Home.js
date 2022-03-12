import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>You're all caught up!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  welcome: {
    color: '#888',
    fontSize: 22,
    marginHorizontal: 15,
    marginTop: 50,
  },
});
