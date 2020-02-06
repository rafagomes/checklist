import React, { useEffect } from 'react';
import {Form, Formik, FormikValues, FormikProps} from 'formik';
import M from 'materialize-css';

import Input from '../../atoms/input';

interface Values {
    nameField: string
}

interface OtherProps {
    label: string
}

function CreateForm() {

    const handleSubmit = (values:FormikValues) => {
        console.log(values);
    }

    useEffect(() => {
        M.updateTextFields();
    });

    return (
        <Formik initialValues={{nameField: '',}}onSubmit={handleSubmit}>
            {(props: OtherProps & FormikProps<Values>) => (
                <Form>
                    <div className="row">
                        <Input label="Name" name="nameField" type="text" />
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default CreateForm;