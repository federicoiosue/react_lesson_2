'use strict';

import React from 'react';
import List from './ListComponent';
import AddTodo from './AddTodoComponent';

require('styles/toDo/Manager.css');

class ManagerComponent extends React.Component {

    todos = [];

    addTodo = (todo) => {
        this.todos.push(todo);
        this.setState(
            {}
        )
    };

    render() {
        return (
            <div>
                <AddTodo addTodo={this.addTodo}/>
                <List todos={this.todos}/>
            </div>
        );
    }
}

ManagerComponent.displayName = 'ToDoManagerComponent';

// Uncomment properties you need
// ManagerComponent.propTypes = {};
// ManagerComponent.defaultProps = {};

export default ManagerComponent;
