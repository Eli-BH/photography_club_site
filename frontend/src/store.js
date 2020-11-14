import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//imports from reducers
import {
  createEventReducer,
  listEventReducer,
  deleteSingleEventReducer,
} from "./reducers/EventReducers";

import {
  userRegisterReducer,
  userLoginReducer,
  userListReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

//combine reducers
const reducer = combineReducers({
  createEvent: createEventReducer, //createNewEvent action
  listEvents: listEventReducer, //listAllEvents actios
  deleteSingleEvent: deleteSingleEventReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userList: userListReducer,
  userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

//initial state
const initialState = { userLogin: { userInfo: userInfoFromStorage } };

//middleware array
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
