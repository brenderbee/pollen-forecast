import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo';
import { Input } from './../common';

export default class Login extends React.Component {
  state = {
    fontLoaded: false,
    email: '',
    password: ''
  }

  pressLogin = () => {
    alert('you pressed login');
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Yellowtail-Regular': require('./../../assets/fonts/Yellowtail-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
        <LinearGradient
          colors={['rgba(120, 255, 214, 0.55)', 'rgba(168, 255, 120, 0.55)']}
          style={styles.gradient}>
          <View style={styles.wrapper}>
            <View style={styles.hero}>
              {
                this.state.fontLoaded ? (
                  <Text style={styles.logo}>Pollen</Text>
                ) : null
              }
              <Input
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                placeholder='user@email.com'
              />
              <Input
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                placeholder='password'
                secureTextEntry={true}
              />
              <View style={styles.button}>
                <Button
                  onPress={this.pressLogin}
                  title="LOGIN"
                  color="white"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
            <View>
              <Text style={styles.signup}>Not a member? <Text style={styles.signup2}>Sign up!</Text></Text>
            </View>
          </View>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  hero: {
    marginTop: '30%'
  },
  logo: {
    fontFamily: 'Yellowtail-Regular',
    fontSize: 64,
    color: '#7d31e9',
    textAlign: 'center',
    marginBottom: 40
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    width: '75%',
    borderRadius: 2,
    height: 55,
    backgroundColor: '#7d31e9'
  },
  signup: {
    color: '#2A2A2A',
    textAlign: 'center',
    marginBottom: 50
  },
  signup2: {
    fontWeight: 'bold'
  }
});
