import React, { Component } from 'react';
import { Navigator, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';
import ButtonAddTask from '../components/buttonAddTask';
import TodoFormContainer from './TodoFormContainer';
import TodoList from './TodoList';
import { COLORS } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const navigationBarRouteMapper = {
    LeftButton: (route, navigator, index, navState) => {
        const { onOpenDrawer } = navigator.props;
        if(route.name === 'index') {
            return null;
        }

        return (
            <TouchableHighlight
                underlayColor={'transparent'}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    marginLeft: 10,
                }}
                onPress={() => {
                    onOpenDrawer(navigator);
                }}
            >
                <Icon name={'navicon'} size={20} color={COLORS.color1} />
            </TouchableHighlight>
        );
    },
    RightButton: (route, navigator, index) => {
        if (route.id === 0) {
            return (
                <ButtonAddTask
                onAddNewTask={() => {
                    navigator.push({
                        name: 'NUEVA TAREA',
                        component: TodoFormContainer,
                        id: 1,
                    })
                }}
                />
            );
        }
    },
    Title: (route, navigator, index) => {
        return (
            <TouchableHighlight
                underlayColor={'transparent'}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                }}
            >
                <Text style={{ color: COLORS.color1, fontSize: 20 }}>
                    {route.name}
                </Text>
            </TouchableHighlight>
        );
    }
};

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialRoute: {
                name: 'MIS TODOS',
                id: 0,
                component: TodoList,
            }
        };

        this.renderScene = this.renderScene.bind(this);
        this.configureScene = this.configureScene.bind(this);
    }
    renderScene(route, navigator) {
        return (
            <route.component
                navigator={navigator}
                route={route}
            />
        )
    }
    configureScene(route) {
        if(route.SceneConfig) {
            return route.SceneConfig;
        }

        return Navigator.SceneConfigs.FloatFromRight;
    }
    render() {
        const { initialRoute } = this.state;
        const { onOpenDrawer } = this.props;
        return (
            <Navigator
                initialRoute={initialRoute}
                renderScene={this.renderScene}
                onOpenDrawer={onOpenDrawer}
                configureScene={this.configureScene}
                navigationBar={
                    <Navigator.NavigationBar
                        style={{
                            backgroundColor: COLORS.background,
                        }}
                        routeMapper={navigationBarRouteMapper}
                    />
                }
            />
        );
    }
}

export default connect(null, dispatch => ({
    addTask: task => {
        dispatch(createTask(task));
    },
}))(MainContainer);
