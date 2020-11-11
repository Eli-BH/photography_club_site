import {
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
  LIST_EVENTS_REQUEST,
  LIST_EVENTS_SUCCESS,
  LIST_EVENTS_FAIL,
} from "../constants/EventConstants";
import axios from "axios";

export const createNewEvent = (title, date, type, description) => async (
  dispatch
) => {
  try {
    dispatch({
      type: CREATE_EVENT_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/events/create",
      { title, date, type, description },
      config
    );

    dispatch({
      type: CREATE_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_EVENT_FAIL,
      payload: error.message,
    });
  }
};

export const listAllEvents = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_EVENTS_REQUEST,
    });

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.get("/api/events");

    dispatch({
      type: LIST_EVENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIST_EVENTS_FAIL,
      payload: error.message,
    });
  }
};
