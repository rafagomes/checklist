import React from 'react';
import {Form, Formik, FormikValues, FormikProps} from 'formik';

import Field from '../../molecules/field';
import Button from '../../atoms/button';
import Dropzone from '../../molecules/dropzone';

interface Values {
    fabricant_name: string,
    fabricant_logo: any
}

interface OtherProps {
    label: string
}

function FormCreateFabricant() {

    const handleSubmit = (values:FormikValues) => {
        console.log(values);
        // let formData = new FormData();
        
        // formData.append('fabricant_name', values.fabricant_name);


    }

    

    return (
        <Formik initialValues={{fabricant_name: '', fabricant_logo: []}}onSubmit={handleSubmit}>
            {(props: OtherProps & FormikProps<Values>) => (
                <Form>
                    <div className="row">
                        <Field type="text" label="Fabricant name" name="fabricant_name" />
                    </div>
                    <div className="row">
                        <Dropzone update={() => props.setFieldValue} name="fabricant_logo" label="Fabricant logo" />
                    </div>
                    <div className="row">
                        <Button type="submit" text="Enviar"  />
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default FormCreateFabricant;