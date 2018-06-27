import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskAddForm from './modules/TaskAddForm';
import TaskList from './modules/TaskList';

class App extends Component {
    state = {
        loading: true,
        taskList: {},
    };

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcomesa to React123</h2>
                </div>
                <p>{ this.state.loading.toString() }</p>
                <TaskAddForm />
                <TaskList taskList={this.state.taskList} />

            </div>

        );
    }
}

export default App;
