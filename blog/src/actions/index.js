import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash';

// use getState() to get all the state from dedux store
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // wait API request and dispatch action in fetchPosts completed before doing anything else
    
    await dispatch(fetchPosts());
    //console.log(getState().posts);
    
    // get unique userId by lodash.uniq()
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));
    
    // Using lodash.chain() to do the same thing with above
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
};

// Redux Thunk
export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    }
};

// Same format as fetchPosts above
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data});
};


// lodash.memoize()
// export const fetchUser = function (id) {
//     return function (dispatch) {
//         _fetchUser(id, dispatch);
//     };
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });