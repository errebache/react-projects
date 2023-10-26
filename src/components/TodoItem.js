import { useContext } from "react";
import {Button, ButtonSecondary} from "./Button";
import { TodoDispatcherContext } from "../context/TodoContext";

function TodoItem({todo}) {
     const dispatch = useContext(TodoDispatcherContext);
    return (
        <li
        onClick={()=> {
          dispatch({
            type: 'SELECTED_TODO',
            id:todo.id
           })
        }}
        className={`mb-10 d-flex justify-content-center align-items-center p-10
        ${todo.selected ? 'selected' : ''}`}>
        <span className="flex-fill">{todo.content} {todo.done && '✅'}</span>
        <Button  
          text="Valider"
          className="mr-15"
          onClick={(e)=> {
            e.stopPropagation();
            dispatch({
              type: 'TOGGLE_TODO',
              id: todo.id
             })
          }}
        />
        <ButtonSecondary
          text="Modifier"
          className="mr-15"
          onClick={(e)=> {
            e.stopPropagation();
            dispatch({
              type: 'EDIT_TOGGLE_TODO',
              id:todo.id
             })
          }}
        />
           <Button
          text="Supprimer"
          className="mr-15"
          onClick={(e)=> {
            e.stopPropagation();
            dispatch({
              type: 'DELETE_TODO',
              id: todo.id
             })
          }}
        />
      </li>
    )
}

export default TodoItem;