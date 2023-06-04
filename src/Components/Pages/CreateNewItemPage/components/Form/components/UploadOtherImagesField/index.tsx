import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import ReturnUploadProps from './components/ReturnUploadProps';
import { UploadOtherImagesField_T } from './lib/types';
const { Dragger } = Upload;



const UploadOtherImagesField: UploadOtherImagesField_T = ({ session_id, register, errors, getValues }) => {

    const registerFieldData = register('imagesUIDs', { required: true })

    let props = ReturnUploadProps(registerFieldData, session_id, getValues)

    let p_style = { fontFamily: 'Montserrat', color: (errors.imagesUIDs) ? 'red' : 'black' }

    return <Dragger
        style={(errors.imagesUIDs) ? { border: 'solid 1px red' } : undefined}
        {...props}>
        <p className="ant-upload-drag-icon">
            <InboxOutlined style={(errors.imagesUIDs) ? { color: 'red' } : undefined} />
        </p>
        <p style={p_style} className="ant-upload-text">
            Загрузите одно или несколько изображений
        </p>
        <p style={p_style} className="ant-upload-hint">
            Нажмите здесь или перетащите файл сюда
        </p>
    </Dragger>
}

export default UploadOtherImagesField;