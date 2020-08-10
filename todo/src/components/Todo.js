import React from 'react'

const Todo = props => {
    return (
        <div 
        onClick={() => {props.dispatch({type: 'TOGGLE_TODO_COMPLETED', payload:props.todo.id})}} 
        className={props.todo.completed ? 'completed' : ''} // the boolean variable ? is true : is false 
        >

        <p>{props.todo.task}</p>

        </div>
    );
};
export default Todo;
