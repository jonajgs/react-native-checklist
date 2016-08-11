import React, { Component } from 'react';
import TodoForm from '../components/todoForm';
import { connect } from 'react-redux';
import { createTask } from '../reducers/todoActions';

class TodoFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.onChange = this.onChange.bind(this);
        this.onAddTask = this.onAddTask.bind(this);
    }
    onChange(task) {
        this.setState({ task });
    }
    onAddTask(task) {
        const { addTask, navigator } = this.props;
        addTask(task);
        navigator.pop();
    }
    render() {
        const { task } = this.state;
        return (
            <TodoForm
                onChangeInput={this.onChange}
                task={task}
                onAddTask={this.onAddTask}
            />
        );
    }
}

export default connect(null, dispatch => ({
    addTask: task => {
        dispatch(createTask(task));
    },
}))(TodoFormContainer);
