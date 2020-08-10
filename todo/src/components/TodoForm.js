import React from 'react';

const TodoForm = props => {
    // console.log(props.formValue)
  return (
     <> <input
        type="text"
        name="task"
        value={props.formValue}
        onChange={(event) => {props.dispatch({type: 'HANDLE_ONCHANGE', payload:event.target.value})}}
      />
      <button onClick={(event) => {
        event.preventDefault();
        props.dispatch({type: 'ON_SUBMIT', payload:props.state.formValue})}}>Submit</button>
      <button onClick={props.clearCompleted}>Clear</button>
  </>
  );
};

export default TodoForm;