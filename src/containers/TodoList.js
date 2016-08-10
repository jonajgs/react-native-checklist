import React, { Component } from 'react';
import { Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import TodoItem from '../components/todoItem';
import { saveTodo, getTodo } from '../reducers/todoActions';
import { COLORS } from '../constants';

class TodoList extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: this.rowHasChanged});
        this.state = {
            dataSource: ds.cloneWithRows(props.tasks),
        };

        this.saveTodo = this.saveTodo.bind(this);
        this.renderRow = this.renderRow.bind(this);
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

    getImageRandom() {
        const randomNumber = Math.floor((Math.random() * 10) + 1);

        return `./src/assets/img/back${randomNumber}.jpg`;
    }

    renderRow(task) {
        return (
            <TodoItem
                {...task}
                getImageRandom={this.getImageRandom}
            />
        );
    }

    render() {
        return (
            <ListView
                enableEmptySections
                style={{ backgroundColor: COLORS.color1 }}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow} />
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
