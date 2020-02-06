import React from 'react';
import {Form, Formik, FormikValues, FormikProps} from 'formik';

import Field from '../../molecules/Field';

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
        <Formik initialValues={{name: '',}}onSubmit={handleSubmit}>
            {(props: OtherProps & FormikProps<Values>) => (
                <Form>
                    <div className="row">
                        <Field label="Name" name="name" />
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default FormCreateChecklist;