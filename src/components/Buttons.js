import React from 'react';
import Button from './Button';

const Buttons = ({buttons, onClick}) => {
    return(
        <div>{
            buttons.map((button, i) => {
                return (
                    <Button 
                        key={i}
                        name={button.name}
                        getJokes={onClick} 
                        />
                );
            })
        }
        </div>
    )
}

export default Buttons;
