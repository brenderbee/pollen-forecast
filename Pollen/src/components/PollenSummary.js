import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

export default class PollenSummary extends Component {
  state = {

  }

  render() {
    return (
      <View style={styles.wrapper}>

        <View style={styles.header}>
          <Text style={styles.location}>Portland, OR</Text>
          <Text style={styles.day}>Today</Text>
        </View>

        <View style={styles.mainPollenWrapper}>
          <View style={styles.mainPollen}>
            <Image source={require('./../../assets/img/weed.png')} style={{height: 75, width: 50}} />
          </View>
        </View>

        <View style={styles.miniPollenWrapper}>

          <View style={styles.miniPollen}>
            <Image source={require('./../../assets/img/tree.png')} style={{height: 25, width: 27}} />
          </View>

          <View style={styles.miniPollen}>
            <Image source={require('./../../assets/img/grass.png')} style={{height: 24, width: 30}} />
          </View>

          <View style={styles.miniPollen}>
            <Image source={require('./../../assets/img/mold.png')} style={{height: 30, width: 28}} />
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderColor: '#D3D4D6',
    height: '75%',
    justifyContent: 'space-between'
  },
  mainPollenWrapper: {

  },
  mainPollen: {
    height: 125,
    width: 125,
    borderColor: '#D3D4D6',
    borderRadius: 125,
    borderWidth: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  miniPollenWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  miniPollen: {
    flexDirection: 'row',
    height: 75,
    width: 75,
    borderColor: '#D3D4D6',
    borderWidth: 2,
    borderRadius: 75,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  location: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  day: {
    textAlign: 'center',
    fontSize: 16
  }
});
