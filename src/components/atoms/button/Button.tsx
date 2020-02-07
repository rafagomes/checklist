import React from 'react';

interface Props {
    type: "button" | "submit" | "reset" | undefined,
    text: string
}

function Button(props:Props) {

    return (
        <button type={props.type} className="waves-effect waves-light btn-large">{props.text}</button>
    );
}

export default Button;