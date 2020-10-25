import React from 'react';
import Button from './Button';

const Buttons = ({buttons, onClick}) => {
    return(
        <div className="tc bg-washed-yellow br3 pa3 ma2 bw2 shadow-5">{
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
