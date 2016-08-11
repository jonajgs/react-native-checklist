import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

export default function({ children, index, navigator, onCloseDrawer }) {
    return (
        <TouchableHighlight
            style={{ marginTop: 10 }}
            underlayColor={'transparent'}
            onPress={() => {
                navigator.popToRoute(navigator.getCurrentRoutes()[0]);
                onCloseDrawer();
            }}
        >
            <Text>
                {children}
            </Text>
        </TouchableHighlight>
    );
}
