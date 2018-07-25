import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export default function Footer() {

  function onPressLogout() {
    firebase.auth().signOut();
    Actions.auth();
  }

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => Actions.history()}>
        <View style={styles.content}>
          <SvgUri
            width='23'
            height='23'
            margin-bottom='16'
            source={require('./../../assets/img/chart-bar-regular.svg')}
          />
          <Text style={styles.text}>history</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.content}>
        <SvgUri
          width='23'
          height='23'
          margin-bottom='16'
          source={require('./../../assets/img/user-regular.svg')}
        />
        <Text style={styles.text}>profile</Text>
      </View>
      <TouchableOpacity onPress={onPressLogout}>
        <View style={styles.content}>
          <SvgUri
              width='23'
              height='23'
              margin-bottom='16'
              source={require('./../../assets/img/sign-out-alt-solid.svg')}
          />
            <Text style={styles.text}>logout</Text>
        </View>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f1f5',
    borderTopColor: '#c4c4c7',
    borderStyle: 'solid',
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0

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
