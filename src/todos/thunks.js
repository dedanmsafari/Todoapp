import {
  loadFailure,
  loadSuccess,
  loadinprogress,
  createTodo,
  removeTodo,
  completedTodo,
} from "../actions";

const endpoint = "http://localhost:8080/todos";
export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadinprogress());
    const response = await fetch(endpoint);
    const todos = await response.json();

    dispatch(loadSuccess(todos));
  } catch (error) {
    dispatch(loadFailure());
    dispatch(displayAlert(error));
  }
};

export const todoRequest = (text) => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};
export const removedTodo = (id) => async (dispatch, getState) => {
  try {
    const response = await fetch(`${endpoint}/${id}`, {
      method: "delete",
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const updatedTodo = (id) => async (dispatch, getState) => {
  try {
    const response = await fetch(`${endpoint}/${id}/completed`, {
      method: "post",
    });
    const updatedTodo = await response.json();
    dispatch(completedTodo(updatedTodo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};
export const displayAlert = (text) => () => {
  alert(text);
};
