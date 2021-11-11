import { combineReducers } from 'redux';
import shelterReducer from './shelterReducer';

const rootReducer = combineReducers({
  state: shelterReducer,
});
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
