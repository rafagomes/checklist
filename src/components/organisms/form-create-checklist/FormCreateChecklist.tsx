import React from 'react';
import {Form, Formik, FormikValues, FormikProps} from 'formik';

import Field from '../../molecules/field';
import Button from '../../atoms/button';

interface Values {
    name: string
}

interface OtherProps {
    label: string
}

function FormCreateChecklist() {

    const handleSubmit = (values:FormikValues) => {
        console.log(values);
    }

    return (
        <Formik initialValues={{name: '', type: '', airplane_model: ''}}onSubmit={handleSubmit}>
            {(props: OtherProps & FormikProps<Values>) => (
                <Form>
                    <div className="row">
                        <Field label="Name" name="name" />
                    </div>
                    <div className="row">
                        <Field label="Checklist type" name="type" />
                    </div>
                    <div className="row">
                        <Field label="Airplane model" name="airplane_model" />
                    </div>
                    <div className="row">
                        <Button type="submit" text="Enviar"  />
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default FormCreateChecklist;