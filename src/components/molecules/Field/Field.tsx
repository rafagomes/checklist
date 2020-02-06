import React from 'react';
import {useField} from 'formik';
import _ from 'lodash';

import Input from '../../atoms/input';
import Label from '../../atoms/label';

function Field({...props}) {

    const [field, meta] = useField(props.name);
    
    const inputProps = _.omit(props, 'label'); 
    
    return (
        <div className="input-field">
            <Input {...field} {...inputProps} />
            {meta.touched && meta.error ? (<span className="error">{meta.error}</span>) : null}
            <Label label={props.label} name={field.name} />
        </div>
    );
}

export default Field;