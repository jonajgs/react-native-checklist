import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonAddTask from './buttonAddTask';
import InputAddTask from './inputAddTask';
import { COLORS } from '../constants';

export default function({ onChangeInput, task, onAddTask }) {
    return (
        <View
            style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 56,
                backgroundColor: "#fff",
            }}
        >
            <View>
                <InputAddTask onChange={onChangeInput} text={task}  />
            </View>
            <TouchableHighlight
                style={{
                    alignItems: 'flex-end',
                    margin: 20,
                }}
                underlayColor={'transparent'}
                onPress={() => {
                    if (task && task.trim() !== '') {
                        onAddTask({
                            task: task.trim(),
                            complete: false,
                        });
                    }
                }}
            >
                <Text>
                    <Icon name={'check'} size={20} color={COLORS.background} />
                </Text>
            </TouchableHighlight>
        </View>
    )
}
