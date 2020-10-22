import React from 'react';

const SpeechBubble = ({text, name}) => { //destructing
    if(typeof(text) === 'object') {
        let out = '...'
        let next = ''
        if(text.type === 'twopart'){
            out = text.setup;
            next = text.delivery;
        }
        else{
            out = text.joke;
        }
        return(
            <div className="chat-box br4 pa3 bg-light-blue shadow-3">
                <p>{out}</p>
                <p>{next}</p>
            </div>
        )
    }
    return(
        <div className="chat-box br4 pa3 bg-light-blue shadow-3">
            <p>Hi stranger!<br/>My name is <strong>{name}</strong> and I'm honored to be your host today.<br/> What would you like to know ... ?</p>
        </div>
        
    )
}

export default SpeechBubble;
