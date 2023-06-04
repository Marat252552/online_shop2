import { uploadFileAPI } from "../../../../../../API/AxiosAPI"; 

let uploadFile = async (options: any, session_id: string) => {
    const { onSuccess, onError, file, onProgress } = options;
    let { uid } = file
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
    } catch (e) {
        console.log(e)
        onError()
    }
}

export default uploadFile