import { combineReducers } from 'redux';
import EmployeeReducer from './reducer_employee';

const rootReducer = combineReducers({
  employee: EmployeeReducer
});

export default rootReducer;
