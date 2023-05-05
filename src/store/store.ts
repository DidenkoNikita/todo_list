import { legacy_createStore as createStore, applyMiddleware, Store, Action, Reducer} from 'redux';
import thunk from 'redux-thunk';

import reducer, { State } from './reducer/reduser';
import { initialState } from './initialState';

export const store: Store<State, Action> = createStore(reducer as Reducer, initialState, applyMiddleware(thunk));

export type RooteState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;