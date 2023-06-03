import { Brand_T } from "../../Components/Shared/types"
import { Build_T } from "../types"


const GetFilesEndpoints = (build: Build_T ) => {
    return {
        uploadFile: build.mutation<{ response: boolean }, any>({
            query: (formData: any) => ({
                url: `/files`,
                method: 'POST',
                body: formData
            }),
        })
    }
}

export default GetFilesEndpoints