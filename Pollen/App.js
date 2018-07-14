import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './src/components/Footer';
import Header from './src/components/Header';

export default class App extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <Header />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
