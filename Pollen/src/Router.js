import React, { Component} from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import { Font } from 'expo';
import Login from './components/Login';
import Main from './components/Main';
import History from './components/History';
import HistoryModal from './components/HistoryModal';

export default class RouterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    fontLoaded: false,
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Yellowtail-Regular': require('./../assets/fonts/Yellowtail-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <Router>
        <Scene key='root' hideNavBar navigationBarStyle={styles.header} headerTitleStyle={styles.title}>
          <Scene key='auth'>
            <Scene key='login' component={Login} title='Please Login' hideNavBar />
          </Scene>
          <Scene key='main'>
            <Scene key='summary' component={Main} title='Main' />
            <Scene key='history' component={History} title='History' />
          </Scene>
          <Scene key='modal' component={HistoryModal} title='Modal' hideNavBar direction='vertical' initial />
        </Scene>
      </Router>
    );
  };
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f8f9fe',
    borderColor: '#e8e9ec',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingTop: 45,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 22,
    color: '#7d31e9',
    fontFamily: 'Yellowtail-Regular'
  }
});
