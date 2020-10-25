import React from 'react';
import SpeechBubble from './SpeechBubble';

const Barman = ({name, id, wisdom}) => { //destructing
    return(
        <div className="tc bg-light-green br3 pa3 ma2 bw2 shadow-5">
            <SpeechBubble text={wisdom} name={name} />
            <img alt='avatar' src={`https://robohash.org/${id}?size=200x200`}/>
            <div className="bar-top">
                <div className="beer"></div>
            </div>
        </div>
        
    )
}

export default Barman;
