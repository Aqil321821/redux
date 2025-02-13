import store from './store/configureStore';
import { addTask, removeTask, fetchTodo } from './store/tasks';
function App() {
  store.dispatch(addTask('Task 1'));
  store.dispatch(removeTask(1));
  store.dispatch(fetchTodo());

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
