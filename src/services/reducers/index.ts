import { combineReducers } from 'redux';
import { blogReducer } from './blog';
import { authReducer } from './auth';
import { settingsReducer } from './settings';

const rootReducer = combineReducers({
    blog: blogReducer,
    auth: authReducer,
    settings: settingsReducer
});

export default rootReducer;