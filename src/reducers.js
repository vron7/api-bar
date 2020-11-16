import { 
    REQUEST_USERS_PENDING,
    REQUEST_USERS_SUCCESS,
    REQUEST_USERS_FAILED,
    REQUEST_TOPIC_PENDING,
    REQUEST_TOPIC_SUCCESS,
    REQUEST_TOPIC_FAILED,
    INITIAL_TOPIC

} from './constants'

const initialStateUser = {
    isPending: false,
    user: null,
    error: '',
}

export const requestUsers = (state = initialStateUser, action = {}) => {
    switch(action.type){
        case REQUEST_USERS_PENDING:
            return Object.assign({}, state, {isPending:true});

        case REQUEST_USERS_SUCCESS:
            return Object.assign({}, state, {user: action.payload, isPending: false});

        case REQUEST_USERS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});

        default:
            return state;
    }
}


const initialStateWisdom = {
    isWaiting: false,
    wisdom: '',
    error: ''
}

export const requestWisdom = (state = initialStateWisdom, action = {}) => {
    switch(action.type){
        case REQUEST_TOPIC_PENDING:
            return Object.assign({}, state, {isWaiting:true});
        case INITIAL_TOPIC:
            return Object.assign({}, state, {wisdom: action.payload, isWaiting: false});
        case REQUEST_TOPIC_SUCCESS:
            return Object.assign({}, state, {wisdom: action.payload, isWaiting: false});

        case REQUEST_TOPIC_FAILED:
            return Object.assign({}, state, {error: action.payload, isWaiting: false});

        default:
            return state;
    }
}
const initialLoaded = {
    isLoaded: false
}

export const resourceLoaded = (state = initialLoaded, action = {}) => {
    switch(action.type){
        case 'RESOURCE_LOADED':
            return Object.assign({}, state, {isLoaded:true});
        case 'RESOURCE_LOADING':
            return Object.assign({}, state, {isLoaded:false});

        default:
            return state;
    }
}