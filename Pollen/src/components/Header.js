import React, { Component } from 'react';
  import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class Header extends Component {
  state = {
    fontLoaded: false,
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Yellowtail-Regular': require('./../../assets/fonts/Yellowtail-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.header}>
        {
          this.state.fontLoaded ? (
            <Text style={styles.logo}>
              back
            </Text>
          ) : null
        }
        {
          this.state.fontLoaded ? (
            <Text style={styles.logo}>
              Pollen
            </Text>
          ) : null
        }
        {
          this.state.fontLoaded ? (
            <Text style={styles.logo}>
              Gear
            </Text>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fe',
    borderColor: '#e8e9ec',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingTop: 44,
    paddingBottom: 5
  },
  logo: {
    fontFamily: 'Yellowtail-Regular',
    color: '#7d31e9',
    fontSize: 22,
  }
});

export default Header;
