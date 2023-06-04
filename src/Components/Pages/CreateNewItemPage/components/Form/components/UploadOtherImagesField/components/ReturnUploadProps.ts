import { UploadProps, message } from "antd";
import uploadFile from "../../../processes/uploadFile";
import { ReturnUploadProps_T } from "../lib/types";



const ReturnUploadProps: ReturnUploadProps_T = (registerFieldData, session_id, getValues) => {
    
    let {onChange, name} = registerFieldData

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        customRequest: (options) => {
            uploadFile(options, session_id)
        },
        onRemove: (e) => {
            let allFilesUIDs = [...getValues().imagesUIDs]
            let newAllFilesUIDs = allFilesUIDs.filter(el => {
                return el !== e.uid
            })
            let data = {target: {value: newAllFilesUIDs, name}}
            onChange(data)
        },
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                if(info && info.fileList) {
                    let fileListUIDs = info.fileList!.map(el => {
                        return el.uid
                    })
                    let e = {target: {value: fileListUIDs, name}}
                    onChange(e)
                }
                
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return props
}

export default ReturnUploadProps