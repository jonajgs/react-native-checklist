import React, { Component } from 'react';
import { Text, ListView, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import TodoItem from '../components/todoItem';
import { saveTodo, getTodo } from '../reducers/todoActions';
import { COLORS } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import TodoFormContainer from '../containers/TodoFormContainer';

class TodoList extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: this.rowHasChanged});
        this.state = {
            dataSource: ds.cloneWithRows(props.tasks),
        };

        this.saveTodo = this.saveTodo.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.goToAddTodo = this.goToAddTodo.bind(this);
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
    goToAddTodo() {
        const { navigator } = this.props;
        navigator.push({
            name: 'NUEVA TAREA',
            component: TodoFormContainer,
            id: 1,
        });
    }
    renderEmptyView() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{ fontSize: 35, color: 'rgba(156, 156, 156, 0.8)' }}
                >
                        {'No tienes todos'}
                    </Text>
                <Text
                    style={{ fontSize: 25, color: 'rgba(156, 156, 156, 0.8)' }}
                >
                    {'Agregar uno ahora'}
                </Text>
                <TouchableHighlight
                    onPress={this.goToAddTodo}
                    underlayColor={'transparent'}
                >
                    <Icon name={'plus-circle'} size={100} color={'rgba(156, 156, 156, 0.2)'} />
                </TouchableHighlight>
            </View>
        );
    }
    renderRow(task) {
        return (
            <TodoItem
                {...task}
                getImageRandom={this.getImageRandom}
            />
        );
    }
    renderView() {
        const thereTasks = this.props.tasks.length;
        if (thereTasks) {
            return (
                <ListView
                    enableEmptySections
                    style={{ marginTop: 56, backgroundColor: "#fff" }}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow} />
            );
        }

        return this.renderEmptyView();
    }
    render() {
        return this.renderView();
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
