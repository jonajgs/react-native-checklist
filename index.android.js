import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import MainContainer from './src/containers/MainContainer';
import store from './src/store';

class checklist extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainContainer />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('checklist', () => checklist);
