import {combineReducers} from 'redux';
import eventReducers from '../../features/events/eventReducers';
import TestReducer from '../../features/sandbox/TestReducer';

const rootReducer=combineReducers({
    test:TestReducer,
    event:eventReducers
});

export default rootReducer;