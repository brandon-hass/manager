import React, { Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyAaU_R7WPZBC40tAxo6yJRSlfa0m4dvhGM',
        authDomain: 'manager-7fb16.firebaseapp.com',
        databaseURL: 'https://manager-7fb16.firebaseio.com',
        projectId: 'manager-7fb16',
        storageBucket: '',
        messagingSenderId: '670477433750'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
};
