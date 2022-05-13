import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducerFunction} from './reducer';

const anaReducer = combineReducers({default:reducerFunction})

const store = createStore(anaReducer);

export {store}