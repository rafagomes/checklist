import React from 'react';
import { useField} from 'formik';

function Input({...props}) {

    const [field, meta] = useField(props.name);

    return (
        <div className="input-field">
            <input {...field} {...props} />
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
            <label htmlFor={field.name}>{props.label}</label>
        </div>
    );
}

export default Input;