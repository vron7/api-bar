import React from 'react';
import { connect } from 'react-redux'
import Cards from '../components/Cards';
import Buttons from '../components/Buttons';
import Card from '../components/Card';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
// import {robots} from './robots'
import './App.css'

import { requestRobots, setSearchField, requestJokes } from '../actions'
const buttons = [
        {name:"Jokes"}
    ];

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
        joke: state.requestJokes.joke
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots()),
        onRequestJokes: () => dispatch(requestJokes())
    }
}

class App extends React.Component{

    componentDidMount() {
        this.props.onRequestRobots()        
    }

    render(){
        console.log('render app, props:', this.props)
        const { searchField, onSearchChange, robots, isPending, onRequestJokes, joke } = this.props;
        const filtered = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        const user = filtered[Math.floor(Math.random() * filtered.length)];
        return (isPending || !user) ?
            <h1 className='tc'>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>API-bar</h1>
                    <ErrorBoundry>
                    <Card 
                        key={user.id} 
                        id={user.id} 
                        name={user.name}
                        joke={joke} 
                        />
                    </ErrorBoundry>
                    <Buttons
                        buttons={buttons}
                        onClick={onRequestJokes} 
                    />                        
                    
                </div>
            )
        

    }
}

// Connecting App to redux Store
export default connect(mapStateToProps, mapDispatchToProps)(App);
