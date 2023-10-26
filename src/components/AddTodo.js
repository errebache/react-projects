import { useContext, useState } from "react";
import {Button} from "./Button";
import { TodoDispatcherContext } from "../context/TodoContext";

function AddTodo() {
    const [value,setValue] = useState('');
    const dispatch = useContext(TodoDispatcherContext);

    function handleClick(e) {
        e.preventDefault();
        dispatch({
          type: 'ADD_CONTENT',
          content: value
         })
        setValue('');
    }

    function handleChange(e) {
       const inputValue = e.target.value;
       setValue(inputValue);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter" && value.length) {
          dispatch({
            type: 'ADD_CONTENT',
            content: value
           })
          setValue('');
        }
    }

  return (
    <div className="d-flex justify-content-center align-items-center mb-20">
        <input
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={value}
            className="mr-15 flex-fill"
            placeholder="Ajouter une tâche"
        />
        <Button text="Ajouter une tâche" onClick={handleClick}/>
    </div>
  );
}

export default AddTodo;
