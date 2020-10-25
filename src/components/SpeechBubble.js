import React from 'react';

const reanimateBubble = () => {
    const el = document.querySelector(".bubble");
    if(!el)
        return

    el.classList.remove("scale-up-center");
    el.classList.remove("scale-out-center");
    void el.offsetWidth;
    el.classList.add("scale-up-center");
}
const fadeOutbubble = () =>{
    const el = document.querySelector(".bubble");
    if(!el)
        return
    el.classList.add("scale-out-center"); 
}
const SpeechBubble = ({text, name, isWaiting}) => { //destructing
    let className = "bubble chat-box br4 pa3 bg-white shadow-3"

    if(isWaiting){
        fadeOutbubble();
    }  else{
        reanimateBubble();
    }
  
    if(text.search("purr") !== -1){
        return(
            <img className="bubble-img shadow-3" src={text}/>
        )
    }
    
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
