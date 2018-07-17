import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Footer extends React.Component {

  render(){
    return(
      <View style={styles.footer}>
        <View style={styles.content}>
          <Text style={styles.text}>history</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>profile</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>logout</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 75,
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
    height: 44
  }
});
