import React from 'react';
import { View } from 'react-native';
import TodoForm from './todoForm';
import TodoList from './TodoList';

export default function() {
    return (
        <View style={{ flex: 1 }}>
            <TodoForm />
            <TodoList />
        </View>
    );
}
