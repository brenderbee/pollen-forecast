import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import { Font, AppLoading } from "expo";

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Yellowtail-Regular': require('./assets/fonts/Yellowtail-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

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
  },

  customFont: {
    fontFamily: 'Yellowtail-Regular',
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
});
