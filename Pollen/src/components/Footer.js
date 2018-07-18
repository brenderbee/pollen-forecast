import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';

export default class Footer extends React.Component {

  render(){
    return(
      <View style={styles.footer}>
        <View style={styles.content}>
          <SvgUri width="23" height="23" margin-bottom="16" source={require('./../../assets/img/chart-bar-regular.svg')} />
          <Text style={styles.text}>history</Text>
        </View>
        <View style={styles.content}>
          <SvgUri width="23" height="23" margin-bottom="16" source={require('./../../assets/img/user-regular.svg')} />
          <Text style={styles.text}>profile</Text>
        </View>
        <View style={styles.content}>
          <SvgUri width="23" height="23" margin-bottom="16" source={require('./../../assets/img/sign-out-alt-solid.svg')} />
          <Text style={styles.text}>logout</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f1f5',
    borderTopColor: '#c4c4c7',
    borderStyle: 'solid',
    borderWidth: 1

  },
  text: {
    color: '#222222',
    fontSize: 16
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 12,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
