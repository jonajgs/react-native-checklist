import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { createTask } from '../reducers/todoActions';
import ButtonAddTask from './buttonAddTask';
import InputAddTask from './inputAddTask';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.onChange = this.onChange.bind(this);
        this.onAddTask = this.onAddTask.bind(this);
    }
    onChange(task) {
        this.setState({ task });
    }
    onAddTask() {
        const { addTask } = this.props;
        const { task } = this.state;

        this.setState({ task: '' },
            addTask({
                complete: false,
                task,
            })
        );
    }
    render() {
        const { task } = this.state;
        return (
            <View style={{ flexDirection: 'row' }}>
                <InputAddTask onChange={this.onChange} text={task}  />
                <ButtonAddTask
                    onAddTask={() => {
                        if (task && task.trim() !== '') {
                            this.onAddTask();
                        }
                    }}
                />
            </View>
        );
    }
}

export default connect(null, dispatch => ({
    addTask: task => {
        dispatch(createTask(task));
    },
}))(TodoForm);
