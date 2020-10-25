import { 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    REQUEST_TOPIC_PENDING,
    REQUEST_TOPIC_SUCCESS,
    REQUEST_TOPIC_FAILED,
} from './constants'
import {getUriForTopic, convertDataToWisdom} from './topics'


// Thunk is looking for a function instead of an action(object)
// The inner function receives the store methods dispatch and getState as parameters.
export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type:REQUEST_ROBOTS_SUCCESS, payload:data}))
        .catch(error => dispatch({type:REQUEST_ROBOTS_FAILED, payload:error}))
}

export const requestWisdom = (topic) => (dispatch) => {
    console.log('dbg request wisdom', topic);
    dispatch({type: REQUEST_TOPIC_PENDING});
    fetch(getUriForTopic(topic))
        .then(response => response.json())
        .then(data => convertDataToWisdom(topic, data))
        .then(data => {
            console.log('dbg after convert', data);
            dispatch({type:REQUEST_TOPIC_SUCCESS, payload:data})
        })
        .catch(error => dispatch({type:REQUEST_TOPIC_FAILED, payload:error}))
}

