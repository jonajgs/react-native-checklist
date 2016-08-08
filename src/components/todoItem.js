import React from 'react';
import { markAsComplete, markAsUncomplete, deleteTask } from '../reducers/todoActions';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

function todoItem({ id, task, complete, markAsComplete, markAsUncomplete, deleteTask }) {
    let textDecorationLine = 'none';
    let changeTaskStatus = markAsComplete;
    let checked = 'square-o';

    if (complete) {
        textDecorationLine = 'line-through';
        changeTaskStatus = markAsUncomplete;
        checked ='check-square-o';
    }

    return (
        <View
            style={{
                padding: 10,
                borderBottomWidth: 1,
                borderColor: '#ccc',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <Text
                style={{ textDecorationLine, flex: 3 }}
            >
                {task}
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <Text
                    onPress={() => {
                        changeTaskStatus(id);
                    }}
                    style={{ marginLeft: 15 }}
                >
                    <Icon name={checked} size={15} color="#ccc" />
                </Text>
                <Text
                    style={{ marginLeft: 15 }}
                >
                    <Icon name={'edit'} size={15} color="#ccc" />
                </Text>
                <Text
                    onPress={() => {deleteTask(id)}}
                    style={{ marginLeft: 15 }}
                >
                    <Icon name={'trash-o'} size={15} color="#ccc" />
                </Text>
            </View>
        </View>
    );
}

export default connect(null, dispatch => ({
    markAsComplete: taskId => {
        dispatch(markAsComplete(taskId));
    },
    markAsUncomplete: taskId => {
        dispatch(markAsUncomplete(taskId));
    },
    deleteTask: taskId => {
        dispatch(deleteTask(taskId));
    },
}))(todoItem);
