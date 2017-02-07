'use strict';

import React from 'react';
import {Button, Checkbox, FormControl} from 'react-bootstrap';

require('styles/toDo/List.css');

class ListComponent extends React.Component {

    render() {
        let rows = this.props.todos.map((element, index) => {
            return (
                <tr key={index}>
                    <td><Checkbox checked={element.done}/></td>
                    <td>{element.text}</td>
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
