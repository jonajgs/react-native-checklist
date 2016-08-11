import React, { Component } from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import Navigator from './Navigator';
import Drawer from '../components/drawer';

export default class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scene: 'MIS TODOS',
        };

        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }
    openDrawer(navigator) {
        this.setState({
            navigator,
        }, this.refs.drawer.openDrawer());
    }
    closeDrawer() {
        this.refs.drawer.closeDrawer();
    }
    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={'drawer'}
                renderNavigationView={
                    () =>
                        <Drawer
                            navigator={this.state.navigator}
                            closeDrawer={this.closeDrawer}
                        />
                }
            >
                <Navigator
                    onOpenDrawer={this.openDrawer}
                />
            </DrawerLayoutAndroid>
        );
    }
}
