import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import configureStore from './store/store';
// import Loading from './components/Loading';
import Register from './components/Register';
import Authentication from './components/Authentication';
import Home from './components/Home';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Scene key="Home" component={Home} title="Home" hideNavBar={true} initial />
      <Scene key="register" component={Register} title="Register" hideNavBar={true}  />
      <Scene key="authentication" component={Authentication} title="Authenticate" hideNavBar={true} />
    </Router>
  </Provider>
);

export default App;


// <Scene key="loader" component={Loading} title="Loading"
//        hideNavBar={true} initial={true} />