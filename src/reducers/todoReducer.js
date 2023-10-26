function todoReducer(state,action) {
  switch (action.type) {
    case 'ADD_CONTENT' : {
      return {
        ...state,
        todoList : [
            ...state.todoList,
            {id: crypto.randomUUID(), done: false, edit: false, content:action.content, selected: false}
        ]
      }
    }
    case 'TOGGLE_TODO': {
        return {
            ...state,
            todoList : [
              ...state.todoList.map((item) => item.id === action.id ? {...item,done:!item.done} : {item})
            ]
        }
    }
    case 'EDIT_TODO': {
        return {
            ...state,
            todoList : [
              ...state.todoList.map((item,i) => item.id === action.id ? {...item,content:action.content,edit:!item.edit} : {item})
            ]
        }
    }
    case 'EDIT_TOGGLE_TODO': {
        return {
            ...state,
            todoList : [
              ...state.todoList.map((item) => item.id === action.id ? {...item,edit: true} : {item})
            ]
        }
    }
    case 'SELECTED_TODO': {
        return {
            ...state,
            todoList : [
              ...state.todoList.map((item) => item.id === action.id ? {...item,selected:!item.selected} : {item})
            ]
        }
    }
    case 'DELETE_TODO': {
        return {
            ...state,
            todoList : [
              ...state.todoList.filter((item) => item.id !== action.id)
            ]
        }
    }
    case 'SET_THEME': {
        return {
            ...state,
            theme: action.theme
            };
    }
    default: {
            throw new Error('action inconnue');
         }
    }
}

export default todoReducer;