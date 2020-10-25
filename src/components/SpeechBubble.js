import React from 'react';

const SpeechBubble = ({text, name}) => { //destructing
    let className = "chat-box br4 pa3 bg-white shadow-3 fade-in slide-top"
    console.log('dbg speech', text)
    if(text) {        
        return(
            <div className={className}>
                <p>{text}</p>
            </div>
        )
    }
    return(
        <div className={className}>
            <p>Hi stranger!<br/>My name is <strong>{name}</strong> and I'm honored to be your host today.<br/> How can I entertain you ?</p>
        </div>
        
    )
}

export default SpeechBubble;
