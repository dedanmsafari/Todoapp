import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETED_TODO,
  LOAD_IN_PROGRESS,
  LOAD_FAILURE,
  LOAD_SUCCESS,
} from "../actions";

//for selectors use ///  state.todos.data---state.todos.isLoading
const initialState = { isLoading: false, data: [] };
export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;

      return { ...state, data: [...state.data, todo] };
    }

    case REMOVE_TODO: {
      const { todo } = payload;
      return { ...state, data: state.data.filter((t) => t.id !== todo.id) };
    }
    case COMPLETED_TODO: {
      const { todo: updatedToDo } = payload;
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === updatedToDo.id) return updatedToDo;
          return todo;
        }),
      };
    }
    case LOAD_SUCCESS: {
      const { todos } = payload;
      return { ...state, isLoading: false, data: todos };
    }
    case LOAD_IN_PROGRESS:
      return { ...state, isLoading: true };
    case LOAD_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
