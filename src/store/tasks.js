//actions:
export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: { task: task },
  };
};
export const removeTask = (id) => {
  return { type: 'REMOVE_TASK', payload: { id: id } };
};

export const fetchTodo = () => {
  return async function (dispatch) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    const task = await response.json();
    dispatch(addTask(task.title));
  };
};



//reducer
let id = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: id++,
          task: action.payload.task,
          completed: false,
        },
      ];
    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
}
