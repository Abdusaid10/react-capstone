import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./types";

const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: error,
});

export {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
}
