import { 
    REQUEST_USERS_PENDING,
    REQUEST_USERS_SUCCESS,
    REQUEST_USERS_FAILED,
    REQUEST_TOPIC_PENDING,
    REQUEST_TOPIC_SUCCESS,
    REQUEST_TOPIC_FAILED,
    RESOURCE_LOADED,
    INITIAL_TOPIC
} from './constants'
import {getUriForTopic, convertDataToWisdom, initTopic} from './topics'

const randomUser = (data) => {
    const user = data[Math.floor(Math.random() * data.length)]
    return {id:user.id, name:user.name}

}

// Thunk is looking for a function instead of an action(object)
// The inner function receives the store methods dispatch and getState as parameters.
export const requestUsers = () => (dispatch) => {
    dispatch({type: REQUEST_USERS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const user = randomUser(data);
            dispatch({type:REQUEST_USERS_SUCCESS, payload:user});
            dispatch({type:INITIAL_TOPIC, payload:initTopic(user.name)})
        })
        .catch(error => dispatch({type:REQUEST_USERS_FAILED, payload:error}))
}

export const requestWisdom = (topic) => (dispatch) => {
    dispatch({type: REQUEST_TOPIC_PENDING});
    dispatch({type: 'RESOURCE_LOADING'});
    fetch(getUriForTopic(topic))
        .then(response => response.json())
        .then(data => convertDataToWisdom(topic, data))
        .then(data => {
            dispatch({type:REQUEST_TOPIC_SUCCESS, payload:data})
        })
        .catch(error => dispatch({type:REQUEST_TOPIC_FAILED, payload:error}))
}

