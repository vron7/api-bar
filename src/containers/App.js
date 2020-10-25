import React from 'react';
import { connect } from 'react-redux'
import Buttons from '../components/Buttons';
import Barman from '../components/Barman';
import SpeechBubble from '../components/SpeechBubble';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'
import {topics} from '../topics'
import { requestRobots, requestJokes, requestWisdom } from '../actions'
let user;

const mapStateToProps = state => {
    console.log('dbg mapStateToProps', state)
    return {
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
        wisdom: state.requestWisdom.wisdom,
        isWaiting: state.requestWisdom.isWaiting,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onRequestRobots: () => dispatch(requestRobots()),
        onRequestWisdom: params => dispatch(requestWisdom(params))
    }
}


class App extends React.Component{

    componentDidMount() {
        this.props.onRequestRobots()        
    }

    render(){
        console.log('render app, props:', this.props)
        const { robots, isPending, onRequestWisdom, wisdom, isWaiting } = this.props;
        if(robots.length && !user)
            user = robots[Math.floor(Math.random() * robots.length)];        
        return (isPending || !user) ?
            <h1 className='tc'>Loading...</h1> :
            (
                <div className='tc '>
                    <h1 className='f1'>API-bar</h1>
                    <div className="tc bg-light-green br3 pa3 ma2 bw2 shadow-5">
                        <ErrorBoundry>
                        <SpeechBubble text={wisdom} name={user.name} isWaiting={isWaiting} />
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
