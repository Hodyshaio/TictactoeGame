import React from 'react';

const Square = (props) =>{
    return (
            <div className="Square" onClick={() => props.onClick(props.index)}>
                {props.value}
            </div>
    );
}

export default Square;