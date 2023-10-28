import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useTodoState, useTododispatcher } from "../context/TodoContext";

function TodoFeatures() {
    const state = useTodoState();
    const dispatch = useTododispatcher();

    function handleThemeChange(e) {
      dispatch({
        type: 'SET_THEME',
        theme: e.target.value
      })
    }
    
     return (
      <div className="d-flex justify-content-center align-items-center p-20">
            <div className="card container p-20">
                <h1 className="mb-20 d-flex justify-content-center align-items-center">
                <span className="flex-fill">Liste de tâches</span>
                <select value={state.theme} onChange={handleThemeChange}>
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                </select>
                </h1>
                <AddTodo />
                <TodoList />
            </div>
        </div>
      );
}

export default TodoFeatures;