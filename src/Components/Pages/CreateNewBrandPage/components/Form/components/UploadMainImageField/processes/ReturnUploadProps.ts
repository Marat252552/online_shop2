import { UploadProps, message } from "antd";
import uploadFile from "../../../../../../CreateNewItemPage/components/Form/processes/uploadFile";
import { ReturnUploadProps_T } from "../lib/types";


const ReturnUploadProps: ReturnUploadProps_T = (setFileList, registerFieldData, session_id) => {
    let {onChange, name} = registerFieldData
    const props: UploadProps = {
        name: 'file',
        customRequest: (options) => {
            uploadFile(options, session_id)
        },
        multiple: true,
        onRemove: () => {
            let newE = {target: {value: '', name}}
            onChange(newE)
        },
        onChange(info) {
            const { status } = info.file;

            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                if (info && info.fileList) {
                    console.log('triggered')
                    let fileUID = info.fileList![0].uid
                    let newE = {target: {value: fileUID, name}}
                    onChange(newE)
                }
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
            let newFileList = [...info.fileList];
            newFileList = newFileList.slice(-1);

            // 2. Read from response and show file link
            newFileList = newFileList.map((file) => {
                if (file.response) {
                    // Component will show file.url as link
                    file.url = file.response.url;
                }
                return file;
            });
            setFileList(newFileList);
        }
    };
    return props
}

export default ReturnUploadProps