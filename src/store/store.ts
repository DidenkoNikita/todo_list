import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/reduser_1';
import { initialState } from './initialState';
import { recordingBoardDataOnServer } from './asyncActions/recordingBoardDataOnServer';
import { removeDataBoards } from './asyncActions/removeDataBoards';
import { addingTasks } from './asyncActions/addingTasks';
import { fetchTodos } from './asyncActions/fetchTodos';
import { fetchTasks } from './asyncActions/fetchTasks';
import { removeTasks } from './asyncActions/removeTasks';
import { asyncCompletedTasks } from './asyncActions/asyncCompletedTasks';

export const store = createStore(reducer, initialState, applyMiddleware(thunk));

export const addBoard = () => { 
  store.dispatch(recordingBoardDataOnServer());
}

export const removeBoard = (id: number) => {
  store.dispatch(removeDataBoards(id));
  console.log('remove');
}

export const addTask = (id: number) => {
  store.dispatch(addingTasks(id));
}

export const addManyBoards = () => {
  store.dispatch(fetchTodos());
  store.dispatch(fetchTasks());
}

export const removeTask = (idT: number) => {
  store.dispatch(removeTasks(idT));
  console.log('remove tasks');
}

export const completedTask = (idT: number, completed: boolean, titleT: string, id: number) => {
  store.dispatch(asyncCompletedTasks(idT, completed, titleT, id));
  console.log('completed::idT::', idT, completed, titleT, id);
}