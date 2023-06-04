import { useState } from 'react';
import type { UploadFile } from 'antd';
import { Upload } from 'antd';
import ReturnUploadProps from './processes/ReturnUploadProps';
import { UploadMainImageField_T } from './lib/types';
const { Dragger } = Upload;


const UploadMainImageField: UploadMainImageField_T = ({ errors, session_id, register }) => {

    const [fileList, setFileList] = useState<UploadFile[]>([])

    const registerFormData = register('mainImageUID', {
        required: 'Загрузите главное изображение'
    });

    const props = ReturnUploadProps(setFileList, registerFormData, session_id)

    return <>
        <Dragger
            {...props}
            fileList={fileList}
            style={(errors.mainImageUID)? { border: 'solid 1px red' } : undefined}
        >
            <p
                style={{ fontFamily: 'Montserrat', color: (errors.mainImageUID) ? 'red' : 'black' }}
                className="ant-upload-text"
            >
                Загрузите одно главное изображение
            </p>
        </Dragger>
    </>

}

export default UploadMainImageField;