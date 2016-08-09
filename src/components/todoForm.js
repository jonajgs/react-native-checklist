import React from 'react';
import { View } from 'react-native';
import ButtonAddTask from './buttonAddTask';
import InputAddTask from './inputAddTask';

export default function({ onChangeInput, task, onAddTask }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            <InputAddTask onChange={onChangeInput} text={task}  />
            <ButtonAddTask
                onAddTask={() => {
                    if (task && task.trim() !== '') {
                        onAddTask();
                    }
                }}
            />
        </View>
    )
}
