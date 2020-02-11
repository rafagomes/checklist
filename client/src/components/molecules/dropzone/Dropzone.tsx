import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

function Dropzone({...props}) {

    const onDrop = useCallback(acceptedFiles => {
        props.update(props.name, acceptedFiles, false);
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return(
        <div {...getRootProps()}>
        <input {...props} {...getInputProps()} />
        {
            isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
        </div>
    );
}

export default Dropzone;