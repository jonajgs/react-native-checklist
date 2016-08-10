import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { createTask } from '../reducers/todoActions';
import TodoForm from '../components/todoForm';
import { COLORS } from '../constants';

class TodoHeader extends Component {
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
            <View style={{ backgroundColor: COLORS.background, height: 56 }}>
                <TodoForm
                    onAddTask={this.onAddTask}
                    task={task}
                    onChangeInput={this.onChange}
                />
            </View>
        );
    }
}

export default connect(null, dispatch => ({
    addTask: task => {
        dispatch(createTask(task));
    },
}))(TodoHeader);
