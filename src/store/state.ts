import { reducer } from './reducer';
import { combineReducers, createStore } from "redux";

export const rootReducer = combineReducers({
    reducer:reducer
})

export const state = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>