'use strict';

import React from 'react';
import AddTodo from './AddTodoComponent';

require('styles/toDo/List.css');

class ListComponent extends React.Component {

    render() {
        let rows = this.props.todos.map((element, index) => {
            return (
                <tr key={index}>
                    <AddTodo todo={element} removeTodo={this.props.removeTodo}/>
                </tr>
            );
        });

        return (
            <div>
                <table>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

ListComponent.displayName = 'ToDoListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
