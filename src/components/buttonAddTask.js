import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { connect } from 'react-redux';

export default function({ onAddTask }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableHighlight
                onPress={onAddTask}
                style={{
                    backgroundColor: '#3f719f',
                    padding: 8,
                    borderRadius: 2,
                }}
            >
                <Text>
                    {'agregar'}
                </Text>
            </TouchableHighlight>
        </View>
    );
}
