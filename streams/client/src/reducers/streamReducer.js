import _ from 'lodash';
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
        // The second '...' means take whatever key-value pair we get from payload and add them to new object
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_STREAM:
            // [] here is not an array, it's refer to un-hardcode key
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            // In DELETE_STREAM, payload is id itself 
            return _.omit(state, action.paylaod);
        default:
            return state;
    }
}