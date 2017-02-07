'use strict';

import React from 'react';
import {Form, Button, Checkbox, FormControl} from 'react-bootstrap';

require('styles/toDo/AddTodo.css');

class AddTodoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    addTodo = () => {
        let todo = {
            text: this.state.text,
            done: false
        };
        this.props.addTodo(todo);
        this.state = {text: ""};
    };

    handleEmailChange = (e) => {
        this.setState({text: e.target.value});
    };

    render() {
        return (
            <div className="addtodo-component">
                <Form inline="true">
                    <Checkbox/>
                    <FormControl value={this.state.text} onChange={this.handleEmailChange}/>
                    <Button onClick={this.addTodo} bsStyle="primary">Add</Button>
                </Form>
            </div>
        );
    }
}

AddTodoComponent.displayName = 'ToDoAddTodoComponent';

// Uncomment properties you need
// AddTodoComponent.propTypes = {};
// AddTodoComponent.defaultProps = {};

export default AddTodoComponent;
