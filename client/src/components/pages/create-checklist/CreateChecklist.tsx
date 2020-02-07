import React, { useEffect } from 'react';
import M from 'materialize-css';

import FormCreateChecklist from '../../organisms/form-create-checklist';

function CreateChecklist() {
    
    useEffect(() => {
        M.updateTextFields();
    });

    return(
        <FormCreateChecklist />
    );
}

export default CreateChecklist;