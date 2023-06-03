import React from 'react';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { uploadFileAPI } from '../../../../../../API/AxiosAPI';
const { Dragger } = Upload;


const UploadMainImageField = ({setMainFileUID, session_id}: {session_id: string, setMainFileUID: React.Dispatch<React.SetStateAction<string>>}) => {

    let uploadFile = async (options: any) => {
        const { onSuccess, onError, file, onProgress } = options;
        let {uid} = file
        onProgress(100)
        let formData = new FormData()
        formData.append('file', file)
        formData.append('uid', uid)
        formData.append('session_id', session_id)
        onProgress(0)
        try {
            await uploadFileAPI(formData)
            onProgress(100)
            onSuccess()
        } catch(e) {
            console.log(e)
            onError()
        }     
    }

    const props: UploadProps = {
        name: 'file',
        customRequest: uploadFile,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                if(info && info.fileList) {
                    let fileUID = info.fileList![0].uid
                    setMainFileUID(fileUID)
                    console.log(fileUID)
                }
                
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return <Dragger {...props}>
        <p style={{fontFamily: 'Montserrat'}} className="ant-upload-text">Загрузите одно главное изображение</p>
    </Dragger>
}

export default UploadMainImageField;