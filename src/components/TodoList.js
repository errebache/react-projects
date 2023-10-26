import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";
import { useContext } from "react";
import { TodoStateContext } from "../context/TodoContext";

function TodoList () {
    const state = useContext(TodoStateContext)
    return state.todoList && state.todoList.length ?
    (
        state.todoList.map((todo) => (
            todo.edit ? (
                <EditTodo key={todo.id} todo={todo} />
            ) :
           ( <TodoItem
                key={todo.id}
                todo={todo}/>
           )
        ))
    ) :
    (
        <p>Aucune tâche en cours </p>
    )
}

export default TodoList;