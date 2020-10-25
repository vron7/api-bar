import React from 'react';
import SpeechBubble from './SpeechBubble';

const Barman = ({id}) => { //destructing
    return(
        <div className="tc">
            <img className="barman" alt='avatar' src={`https://robohash.org/${id}?size=200x200`}/>
            <div className="bar-top">
                <div className="beer"></div>
            </div>
        </div>
        
    )
}

export default Barman;
