import TodoFeatures from './components/TodoFeatures';
import TodoProvider from './components/TodoProvider';


function App() {
  return (
    <TodoProvider>
      <TodoFeatures />
    </TodoProvider>
  )
}

export default App;
