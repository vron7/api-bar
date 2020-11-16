import React from 'react';
import {wisdomFormat} from '../topics';


let SHOW_LOADER = false;
const SpeechBubble = ({content = {}, isWaiting, isLoaded, onResourceLoaded}) => { //destructing
    let className = "bubble chat-box br4 pa3 bg-white shadow-3"
    console.log("dbg bubble render --------------------> START");  
    console.log("dbg bubble render CONTENT:", content, content.data);  
    console.log("dbg bubble render FORMAT:", content.format );  
    console.log("dbg bubble render ISWAITING:",  isWaiting );  
    console.log("dbg bubble render ISLOADED:", isLoaded );  
    console.log("dbg bubble render --------------------> END"); 
    

    if(content.data){
        switch (content.format){
            case wisdomFormat.INITIAL:
                return(
                    <div className={className}>
                        <p>Hi stranger!<br/>My name is <strong>{content.data}</strong> and I'm honored to be your host today.<br/> How can I entertain you ?</p>
                    </div>  
                )
            case  wisdomFormat.COVID_TEXT:
                if(isWaiting){
                    className += " scale-out-center"
                }  else{
                    className += " scale-up-center"
                }
                return(
                    <div className={className}>
                        <p>Let me share my <strong>COVID-19 😷</strong> stats  with you ...<br/>(As of today, in Estonia)
                            <br/>
                            <br/><strong>{content.data.new}</strong> new cases confirmed 🚀
                            <br/><strong>{content.data.died}</strong> people died 🙏
                            <br/><strong>{content.data.recovered}</strong> people recovered 👍
                        </p>
                    </div>
                )

            case wisdomFormat.TEXT:
                if(isWaiting){
                    className += " scale-out-center"
                }  else{
                    className += " scale-up-center"
                }
                return(
                    <div className={className}>
                        <p>{content.data}</p>
                    </div>
                )

            case wisdomFormat.IMAGE:
                let classNameLoader = "loader-container"
                let classNameImg = "bubble-img shadow-3"

                if(isLoaded){
                    SHOW_LOADER = false;
                    classNameImg += " swing-in-bottom-fwd";
                }
                else{
                    SHOW_LOADER = true;
                }
                if (SHOW_LOADER){
                    console.log("dbg loader show");  
                    classNameLoader += " show";
                    classNameImg += " swing-out-bottom-bck";
                }
                return(
                    <div className="bubble-img-container">
                        <img className={classNameImg} src={content.data} onLoad={onResourceLoaded}/>
                        <div className={classNameLoader}>
                            <div className="loader"></div>
                        </div>
                    </div>                    
                )
            default:
                return(
                    <div className={className}>
                        <p>{"Oops, something went wrong!"}</p>
                    </div>
                )
        }
    }
    else {  // return default
        return(
            <div className={className}>
                <p>...</p>
            </div>            
        )
    }
}

export default SpeechBubble;
