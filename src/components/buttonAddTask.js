import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../constants';

export default function({ onAddTask }) {
    return (
        <TouchableHighlight
            onPress={onAddTask}
            style={{
                width: 48,
                padding: 8,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
            }}
        >
            <Text>
                <Icon name={'plus'} size={16} color={COLORS.color1} />
            </Text>
        </TouchableHighlight>
    );
}
