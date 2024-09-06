jsx
// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Farmer's Profile</Text>
      <Text style={styles.info}>Name: John Doe</Text>
      <Text style={styles.info}>Verified: Yes</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default ProfileScreen;

