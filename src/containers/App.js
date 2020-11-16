import React from 'react';
import { connect } from 'react-redux'
import Buttons from '../components/Buttons';
import Barman from '../components/Barman';
import SpeechBubble from '../components/SpeechBubble';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'
import {topics} from '../topics'
import { requestUsers, requestWisdom } from '../actions'

const mapStateToProps = state => {
    console.log('dbg mapStateToProps', state)
    return {
        user: state.requestUsers.user,
        isPending: state.requestUsers.isPending,
        error: state.requestUsers.error,
        wisdom: state.requestWisdom.wisdom,
        isWaiting: state.requestWisdom.isWaiting,
        isLoaded: state.resourceLoaded.isLoaded

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onRequestUsers: () => dispatch(requestUsers()),
        onRequestWisdom: params => dispatch(requestWisdom(params)),
        onResourceLoaded: () => dispatch({type: 'RESOURCE_LOADED'})
    }
}


class App extends React.Component{

    componentDidMount() {
        this.props.onRequestUsers()        
    }


    render(){
        const { user, isPending, onRequestWisdom, wisdom, isWaiting, onResourceLoaded, isLoaded } = this.props;
        return (isPending || !user) ?
            <h1 className='tc'>Loading...</h1> :
            (
                <div className='tc '>
                    <h1 className='f1'>API-bar</h1>
                    <div className="tc bg-light-green br3 pa3 ma2 bw2 shadow-5">
                        <ErrorBoundry>
                        <SpeechBubble content={wisdom} isWaiting={isWaiting} isLoaded={isLoaded} onResourceLoaded={onResourceLoaded} />
                        <Barman id={user.id} />
                        </ErrorBoundry>
                    </div>   
                    <Buttons 
                        buttons={topics}
                        onClick={onRequestWisdom} 
                    />             
                    
                </div>
            )
        

    }
}

// Connecting App to redux Store
export default connect(mapStateToProps, mapDispatchToProps)(App);
