import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import Main from './components/Main';
import History from './components/History';

export default function RouterComponent() {
  return (
    <Router>
      <Scene key='root' hideNavBar={true}>
        <Scene key='auth'>
          <Scene key='login' component={Login} title='Please Login' hideNavBar={true} initial />
        </Scene>
        <Scene key='main'>
          <Scene key='summary' component={Main} title='Pollen' />
          <Scene
            key='history'
            component={History}
            title='Pollen'
          />
        </Scene>
      </Scene>
    </Router>
  );
}
