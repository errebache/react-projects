import { useReducer } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ThemeContext from './context/ThemeContext';
import todoReducer from './reducers/todoReducer';
import { TodoDispatcherContext, TodoStateContext } from './context/TodoContext';


function App() {
  const [state,dispatch] = useReducer(todoReducer, {
    theme: 'primary',
    todoList: []});

    function handleThemeChange(e) {
      dispatch({
        type: 'SET_THEME',
        theme: e.target.value
      })
    }

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatcherContext.Provider value={dispatch}>
        <ThemeContext.Provider value={state.theme}>
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
        </ThemeContext.Provider>
      </TodoDispatcherContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default App;
