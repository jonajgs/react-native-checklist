import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Main from './src/components/main';
import store from './src/store';

class checklist extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('checklist', () => checklist);
