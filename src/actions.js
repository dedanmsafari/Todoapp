export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";
export const LOAD_IN_PROGRESS = "LOAD_IN_PROGRESS";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAILURE = "LOAD_FAILURE";


export const createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: {
    todo
    },
  };
};
export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    payload: { todo },
  };
};

export const completedTodo = (todo) => {
  return {
    type: COMPLETED_TODO,
    payload: { todo },
  };
};
export const loadinprogress = () => {
  return {
    type: LOAD_IN_PROGRESS,
  };
};
export const loadSuccess = (todos) => {
  return {
    type: LOAD_SUCCESS,
    payload: { todos },
  };
};

export const loadFailure = () => {
  return {
    type: LOAD_FAILURE,
  };
};
