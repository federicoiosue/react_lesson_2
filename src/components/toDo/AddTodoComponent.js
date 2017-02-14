'use strict';

import React from 'react';
import {Form, Button, Checkbox, FormControl} from 'react-bootstrap';

require('styles/toDo/AddTodo.css');

class AddTodoComponent extends React.Component {

    todo = {};

    constructor(props) {
        super(props);
        this.todo = props.todo || this.getNewTodo();
    }

    getNewTodo() {
        return {text: '', done: false};
    }

    addTodo = () => {
        let todo = {
            id: Date.now(),
            text: this.todo.text,
            done: this.todo.done
        };
        this.props.addTodo(todo);
        this.todo = this.getNewTodo();
        this.setState({});
    };

    removeTodo = () => {
        this.props.removeTodo(this.todo.id);
    };

    handleTextChange = (e) => {
        this.todo.text = e.target.value;
        this.setState({});
    };

    handleDoneChange = (e) => {
        this.todo.done = e.target.checked;
        this.setState({});
    };

    render() {
        return (
            <div className="addtodo-component">
                <Form inline="true">
                    <Checkbox value={this.todo.done} onChange={this.handleDoneChange}/>
                    <FormControl value={this.todo.text} onChange={this.handleTextChange}/>
                    {
                        this.todo.id
                            ? <Button onClick={this.removeTodo} bsStyle="danger">Remove</Button>
                            : <Button onClick={this.addTodo} bsStyle="primary">Add</Button>
                    }
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
