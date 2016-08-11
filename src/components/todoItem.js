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
                marginTop: 10,
                marginBottom: 5,
                marginLeft: 10,
                marginRight: 10,
                padding: 10,
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: '#fff',
                flex: 1,
                elevation: 10,
                flexDirection: 'row',
                borderRadius: 2,
                justifyContent: 'space-between',
            }}
        >
            <Text
                numberOfLines={1}
                style={{ textDecorationLine, flex: 1 }}
            >
                {task}
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <Text
                    onPress={() => {
                        changeTaskStatus(id);
                    }}
                    style={{ marginLeft: 20 }}
                >
                    <Icon name={checked} size={15} color={complete ? '#9E9E9E' : '#ccc'} />
                </Text>
                <Text
                    style={{ marginLeft: 20 }}
                >
                    <Icon name={'edit'} size={15} color="#9E9E9E" />
                </Text>
                <Text
                    onPress={() => {deleteTask(id)}}
                    style={{ marginLeft: 20 }}
                >
                    <Icon name={'trash-o'} size={15} color="#E53935" />
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
