const reducer = (state, action) => {
  switch (action.type) {
    case "ON_SUBMIT":
      const newTodo = {
        task: action.payload,
        id: Date.now(), // or Math.random() works
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        formValue: "",
      };

    case "TOGGLE_TODO_COMPLETED":
      let list = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            console.log(todo.completed);
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        }),
      };
      return { ...list };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((item) => item.completed === false),
      };

    case "HANDLE_ONCHANGE":
      return {
        ...state,
        formValue: action.payload,
      };
  }
};
export default reducer;
