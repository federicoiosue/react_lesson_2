'use strict';

import React from 'react';
import List from './ListComponent';
import AddTodo from './AddTodoComponent';
import { remove } from 'lodash';

require('styles/toDo/Manager.css');

class ManagerComponent extends React.Component {

    todos = [];

    addTodo = (todo) => {
        this.todos.push(todo);
        this.setState({});
    };

    removeTodo = (id) => {
        _.remove(this.todos, (todo) => {
            return todo.id === id;
        });
        this.setState({});
    };

    render() {
        return (
            <div>
                <AddTodo addTodo={this.addTodo}/>
                <List todos={this.todos} removeTodo={this.removeTodo}/>
            </div>
        );
    }
}

ManagerComponent.displayName = 'ToDoManagerComponent';

// Uncomment properties you need
// ManagerComponent.propTypes = {};
// ManagerComponent.defaultProps = {};

export default ManagerComponent;
