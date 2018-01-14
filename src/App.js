import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

// React Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import firebase from 'firebase';

import Router from './Router';

import LoginForm from './componets/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAJn08v4_XgftNPMFE3zgw7QdKr2vAiGT0',
            authDomain: 'manager-dfdef.firebaseapp.com',
            databaseURL: 'https://manager-dfdef.firebaseio.com',
            projectId: 'manager-dfdef',
            storageBucket: 'manager-dfdef',
            messagingSenderId: '630834393626'
        };

        firebase.initializeApp(config);
    }

    render() {
        const { container } = styles;
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
            <Provider store={ store }>
              <View style={ styles.container }>
                <Router />
              </View>
            </Provider>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3E4969'
    }
});