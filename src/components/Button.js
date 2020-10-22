import React from 'react';

const Button = ({name, getJokes}) => { //destructing
    return(
        <a href="#0" className="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray" onClick={getJokes} >
            {name}
        </a>
        
    )
}

export default Button;
