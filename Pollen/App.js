import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { LinearGradient } from 'expo';
import Footer from './src/components/Footer';
import Main from './src/components/Main';
import Header from './src/components/Header';
import Login from './src/components/Login';
import { masterFirebaseConfig } from './api-keys';
import { Spinner } from './src/common';

const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  projectId: masterFirebaseConfig.projectId,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

export default class App extends React.Component {
  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.container}>
            <Header />
            <Main />
            <Footer />
          </View>
        );

      case false:
        return (<Login />);

      default:
        return (
          <LinearGradient
            colors={['rgba(120, 255, 214, 0.55)', 'rgba(168, 255, 120, 0.55)']}
            style={styles.gradient}
          >
            <Spinner />
          </LinearGradient>
        );
    }
  }

  render() {
      return (
        <View style={styles.container}>
          {this.renderContent()}
        </View>
      );
    }

}

const styles = StyleSheet.create({
  gradient: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  }
});
