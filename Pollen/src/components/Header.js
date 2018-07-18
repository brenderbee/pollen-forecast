import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';

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
        <View>
          <SvgUri width="18" height="18" source={require('./../../assets/img/arrow-left-solid.svg')} />
        </View>
        {
          this.state.fontLoaded ? (
            <Text style={styles.logo}>
              Pollen
            </Text>
          ) : null
        }

        <View>
          <SvgUri width="18" height="18" source={require('./../../assets/img/cogs-solid.svg')} />
        </View>
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
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20
  },
  logo: {
    fontFamily: 'Yellowtail-Regular',
    color: '#7d31e9',
    fontSize: 22,
  }
});

export default Header;
