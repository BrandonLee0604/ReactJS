import streams from '../apis/streams';
import history from '../history';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM } from "./types";


export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

// Receive the values we input into our forms as arguements
export const createStream = (formValues) => {
    // Use Redux-Thunk to create async action creator
    return async (dispatch, getState) => {
        const { userId } = getState().auth;
        const response = await streams.post('/streams', { ...formValues, userId });

        dispatch({ type: CREATE_STREAM, payload: response.data });
        // Do some programmatic navigation 
        // to get user back to the root route
        history.push('/');
    }
};

export const fetchStreams = () => {
    // Use Redux-Thunk to create async action creator
    return async (dispatch) => {
        const response = await streams.get('/streams');

        dispatch({ type: FETCH_STREAMS, payload: response.data });
    }
};

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);

        dispatch({ type: FETCH_STREAM, payload: response.data });
    }
}

// Need id and formValue to update streams
export const editStream = (id, formValues) => {
    return async (dispatch) => {
        // Use patch request instead of put request to just update some properties of the object
        const response = await streams.patch(`/streams/${id}`, formValues);

        dispatch({ type: EDIT_STREAM, payload: response.data });
        history.push('/');
    }
}

// No response for delete a stream
export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
    history.push('/');
};