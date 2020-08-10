
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            {props.todos.map(item => (
                <Todo
                key={item.id}
                todo={item}
               dispatch={props.dispatch}
                />
            ))}
        </div>
    )
}

export default TodoList;
