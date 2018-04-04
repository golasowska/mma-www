import { combineReducers } from 'redux';
import EmployeeReducer from './reducer_employee';
import MembersReducer from './reducer_members';
import OfferReducer from './reducer_offer';

const rootReducer = combineReducers({
  employee: EmployeeReducer,
  members: MembersReducer,
  offer: OfferReducer
});

export default rootReducer;
