
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './stores'
import RootScreen from './components/RootScreen';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
    console.log("appName");
  }



  render() {
    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    )
   

  }


}

AppRegistry.registerComponent("rn-sample-drawer-app", () => App)
