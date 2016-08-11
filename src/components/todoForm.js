import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonAddTask from './buttonAddTask';
import InputAddTask from './inputAddTask';

export default function({ onChangeInput, task, onAddTask }) {
    return (
        <View style={{ flexDirection: 'row', marginTop: 56 }}>
            <InputAddTask onChange={onChangeInput} text={task}  />
            <TouchableHighlight
                style={{
                    flex: 1,
                    justifyContent: 'center'
                }}
                onPress={onAddTask}
            >
                <Text>
                    <Icon name={'plus'} size={20} />
                </Text>
            </TouchableHighlight>
        </View>
    )
}
