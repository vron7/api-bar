import { 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    REQUEST_TOPIC_PENDING,
    REQUEST_TOPIC_SUCCESS,
    REQUEST_TOPIC_FAILED

} from './constants'

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending:true});

        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false});

        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});

        default:
            return state;
    }
}


const initialStateWisdom = {
    isPending: false,
    wisdom: '',
    error: ''
}

export const requestWisdom = (state = initialStateWisdom, action = {}) => {
    switch(action.type){
        case REQUEST_TOPIC_PENDING:
            return Object.assign({}, state, {isPending:true});

        case REQUEST_TOPIC_SUCCESS:
            return Object.assign({}, state, {wisdom: action.payload, isPending: false});

        case REQUEST_TOPIC_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});

        default:
            return state;
    }
}