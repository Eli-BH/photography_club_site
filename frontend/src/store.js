import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//imports from reducers
import { createEventReducer, listEventReducer } from "./reducers/EventReducers";

//combine reducers
const reducer = combineReducers({
  createEvent: createEventReducer, //createNewEvent action
  listEvents: listEventReducer, //listAllEvents actios
});

//initial state
const initialState = {};

//middleware array
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
