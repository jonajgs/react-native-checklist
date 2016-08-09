import React from 'react';
import { View } from 'react-native';
import TodoHeader from '../containers/TodoHeader';
import TodoList from '../containers/TodoList';

export default function() {
    return (
        <View style={{ flex: 1 }}>
            <TodoHeader />
            <TodoList />
        </View>
    );
}
