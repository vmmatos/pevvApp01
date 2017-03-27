import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';

import Firebase from './src/includes/firebase/authentication';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>login_test01</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
