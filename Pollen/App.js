import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import Footer from './src/components/Footer';
import Main from './src/components/Main';
import Header from './src/components/Header';
import Login from './src/components/Login';
import { masterFirebaseConfig } from './api-keys';

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
    loggedIn: false
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
    if (this.state.loggedIn) {
      return (
        <View style={styles.container}>
          <Header />
          <Main />
          <Footer />
        </View>
      );
    }

    return (
      <Login />
    );
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
  container: {
    flex: 1,
    justifyContent: 'space-between',
  }
});
