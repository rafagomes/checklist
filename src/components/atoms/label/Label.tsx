import React from 'react';

function Label({name, label}:{name:string, label:string}) {
    return (
        <label htmlFor={name}>{label}</label>
    );
}

export default Label;