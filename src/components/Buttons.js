import React from 'react';
import Button from './Button';

const Buttons = ({buttons, onClick}) => {
    return(
        <div>{
            buttons.map((button, i) => {
                return (
                    <Button 
                        key={i}
                        idx={i}
                        name={button.name}
                        id={button.id}
                        getSomething={onClick} 
                        />
                );
            })
        }
        </div>
    )
}

export default Buttons;
