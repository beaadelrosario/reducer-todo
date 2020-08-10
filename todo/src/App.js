import React, { useReducer }from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import reducer from '../src/reducers/reducer'
import './App.css'

const initialState = {
  formValue:'',
  todos: [],
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

    return (
      <div>
        <h2>Welcome to your To-Do App!</h2>
        <TodoForm
        formValue={state.formValue}
        clearCompleted={() => {dispatch({type: 'CLEAR_COMPLETED'})}}
        dispatch={dispatch}
        state={state}
        />
        <TodoList
        todos={state.todos}
        dispatch={dispatch}
        />
      </div>
    );
  }
export default App;
