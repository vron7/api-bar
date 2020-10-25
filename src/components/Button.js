import React from 'react';
const colors = ["light-purple", "gold", "hot-pink", "orange"];

const Button = ({idx, id, name, getSomething}) => {
    const bgColor = colors[idx] ? colors[idx] : "hot-pink"
    const className = `f6 link ma1 dim br3 ph3 pv2 mb2 dib white shadow-3 bg-${bgColor}`
    const handleClick = ((idButton) => () => getSomething(idButton));
    return(
        <a href="#0" className={className} onClick={handleClick(id)} >
            {name}
        </a>      
    )
}

export default Button;
