import React from 'react';

const Button = ({idx, id, name, getSomething}) => { //destructing
    const bgColor = (idx % 2 === 0) ? "bg-light-purple" : "bg-hot-pink"
    const className = `f6 link dim br3 ph3 pv2 mb2 dib white ${bgColor}`
    const handleClick = ((idButton) => () => getSomething(idButton));
    return(
        <a href="#0" className={className} onClick={handleClick(id)} >
            {name}
        </a>        
    )
}

export default Button;
