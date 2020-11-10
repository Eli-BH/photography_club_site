import {
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
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
