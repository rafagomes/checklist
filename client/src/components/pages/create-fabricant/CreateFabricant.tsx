import React, { useEffect } from 'react';
import M from 'materialize-css';

import FormCreateFabricant from '../../organisms/form-create-fabricant/FormCreateFabricant';

function CreateFabricant() {
    
    useEffect(() => {
        M.updateTextFields();
    });

    return(
        <FormCreateFabricant />
    );
}

export default CreateFabricant;