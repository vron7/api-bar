import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    REQUEST_JOKES_PENDING,
    REQUEST_JOKES_SUCCESS,
    REQUEST_JOKES_FAILED
} from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

// Thunk is looking for a function instead of an action(object)
// The inner function receives the store methods dispatch and getState as parameters.
export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type:REQUEST_ROBOTS_SUCCESS, payload:data}))
        .catch(error => dispatch({type:REQUEST_ROBOTS_FAILED, payload:error}))
}
export const requestJokes = () => (dispatch) => {
    dispatch({type: REQUEST_JOKES_PENDING});
    fetch('https://sv443.net/jokeapi/v2/joke/Any')
        .then(response => response.json())
        .then(data => dispatch({type:REQUEST_JOKES_SUCCESS, payload:data}))
        .catch(error => dispatch({type:REQUEST_JOKES_FAILED, payload:error}))
}
