import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Footer from './src/components/Footer';
import Main from './src/components/Main';
import Header from './src/components/Header';
import Login from './src/components/Login';
import { Font, AppLoading } from "expo";

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    login: true
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Yellowtail-Regular': require('./assets/fonts/Yellowtail-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render(){
    if (!this.state.login) {
      return(
        <Login />
      );
    } else {
      return(
        <View style={styles.container}>
          <Header />
          <Main />
          <Footer />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  customFont: {
    fontFamily: 'Yellowtail-Regular',
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
});
