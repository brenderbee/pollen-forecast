import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import Main from './components/Main';

export default function RouterComponent() {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='login' component={Login} title='Please Login' hideNavBar={true} initial />
        <Scene key='main' component={Main} title='Pollen' />
      </Scene>
    </Router>
  );
}
