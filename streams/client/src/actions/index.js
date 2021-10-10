import { formValues } from 'redux-form';
import streams from '../apis/streams';
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
    return async (dispatch) => {
        const response = await streams.post('/streams', formValues);

        dispatch({ type: CREATE_STREAM, payload: response.date });
    }
};

export const fetchStreams = () => {
    // Use Redux-Thunk to create async action creator
    return async (dispatch) => {
        const response = await streams.get('/streams');

        dispatch({ type: FETCH_STREAMS, payload: response.date });
    }
};

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);
        
        dispatch({ type: FETCH_STREAM, payload: response.date });
    }
}

// Need id and formValue to update streams
export const editStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.put(`/streams/${id}`, formValues);

        dispatch({ type: EDIT_STREAM, payload: response.data });
    }
}

// No response for delete a stream
export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);

        dispatch({ type: DELETE_STREAM, payload: id });
    }
}