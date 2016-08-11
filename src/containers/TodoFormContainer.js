import React, { Component } from 'react';
import TodoForm from '../components/todoForm';
import { connect } from 'react-redux';
import { createTask } from '../reducers/todoActions';

class TodoFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.onChange = this.onChange.bind(this);
    }
    onChange(task) {
        this.setState({ task });
    }
    render() {
        const { task } = this.state;
        const { addTask } = this.props;
        return (
            <TodoForm
                onChangeInput={this.onChange}
                task={task}
                onAddTask={addTask}
            />
        );
    }
}

export default connect(null, dispatch => ({
    addTask: task => {
        dispatch(createTask(task));
    },
}))(TodoFormContainer);
