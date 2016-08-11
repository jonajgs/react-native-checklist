import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../constants';

export default function({ onAddNewTask }) {
    return (
        <TouchableHighlight
            underlayColor={'transparent'}
            style={{
                flex: 1,
                justifyContent: 'center',
                marginRight: 10,
            }}
            onPress={onAddNewTask}
        >
            <Text>
                <Icon name={'plus-circle'} size={23} color={COLORS.color1} />
            </Text>
        </TouchableHighlight>
    );
}
