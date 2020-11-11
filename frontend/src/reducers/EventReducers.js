import {
  CREATE_EVENT_FAIL,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  LIST_EVENT_REQUEST,
  LIST_EVENT_SUCCESS,
  LIST_EVENT_FAIL,
} from "../constants/EventConstants";

export const createEventReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT_REQUEST:
      return { loading: true };
    case CREATE_EVENT_SUCCESS:
      return {
        loading: false,
        success: true,
        eventCreateResponse: action.payload,
      };
    case CREATE_EVENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listEventReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case LIST_EVENT_REQUEST:
      return { loading: true };
    case LIST_EVENT_SUCCESS:
      return { loading: false, success: true, events: action.payload };
    case LIST_EVENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
