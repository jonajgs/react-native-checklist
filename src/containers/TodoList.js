import React, { Component } from 'react';
import { Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import TodoItem from '../components/todoItem';
import { saveTodo, getTodo } from '../reducers/todoActions';

class TodoList extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: this.rowHasChanged});
        this.state = {
            dataSource: ds.cloneWithRows(props.tasks),
        };

        this.saveTodo = this.saveTodo.bind(this);
    }
    componentDidMount() {
        const { updateChecklist } = this.props;
        updateChecklist();
    }
    saveTodo() {
        const { saveChecklist } = this.props;
        saveChecklist();
    }
    componentWillReceiveProps(props) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(props.tasks),
        }, this.saveTodo);
    }

    rowHasChanged(prevRow, nextRow) {
        return (prevRow && nextRow) ||
                prevRow.complete != nextRow.complete;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.state.dataSource}
                renderRow={(task) => <TodoItem {...task} />} />
        );
    }
}

export default connect(
    state => ({
        tasks: state.tasks,
    }),
    dispatch => ({
        updateChecklist: () => {
            dispatch(getTodo());
        },
        saveChecklist: (state) => {
            dispatch(saveTodo(state));
        },
    })
)(TodoList)
