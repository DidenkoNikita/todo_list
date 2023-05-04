import { legacy_createStore as createStore, applyMiddleware, Store, Action, Reducer} from 'redux';
import thunk from 'redux-thunk';

import reducer, { State } from './reducer/reduser';
import { initialState } from './initialState';
import { recordingBoardDataOnServer } from './asyncActions/recordingBoardDataOnServer';
import { removeDataBoards } from './asyncActions/removeDataBoards';
import { addingTasks } from './asyncActions/addingTasks';
import { fetchTodos } from './asyncActions/fetchTodos';
import { fetchTasks } from './asyncActions/fetchTasks';
import { removeTasks } from './asyncActions/removeTasks';
import { asyncCompletedTasks } from './asyncActions/asyncCompletedTasks';

export const store: Store<State, Action> = createStore(reducer as Reducer, initialState, applyMiddleware(thunk));

export type RooteState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const addBoard = (): void => { 
  store.dispatch(recordingBoardDataOnServer());
}

export const removeBoard = (idBoard: number): void => {
  store.dispatch(removeDataBoards(idBoard));
}

export const addTask = (idBoard: number): void => {
  store.dispatch(addingTasks(idBoard));
}

export const addManyBoards = (): void => {
  store.dispatch(fetchTodos());
  store.dispatch(fetchTasks());
}

export const removeTask = (id: number): void => {
  store.dispatch(removeTasks(id));
}

export const completedTask = (id: number, completed: boolean, title: string, board_id: number): void => {
  store.dispatch(asyncCompletedTasks(id, completed, title, board_id));
}