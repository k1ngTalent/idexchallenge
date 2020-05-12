import {combineReducers} from 'redux';
import profileReducer from './profile';
const rootReducer = combineReducers({
    user:profileReducer
})


export default rootReducer;