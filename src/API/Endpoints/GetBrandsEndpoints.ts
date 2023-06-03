import { Brand_T } from "../../Components/Shared/types"
import { Build_T } from "../types"


const GetBrandsEndpoints = (build: Build_T ) => {
    return {
        createBrand: build.mutation<{ response: boolean }, any>({
            query: (formData: any) => ({
                url: `/brands`,
                method: 'POST',
                body: formData
            }),
            invalidatesTags: ['getBrands']
        }),
        deleteBrand: build.mutation<void, {_id: string}>({
            query: ({_id}: {_id: string}) => ({
                url: `/brands`,
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: ['getBrands', 'getItems']
        }),
        getBrands: build.query<{ brands: Brand_T[] }, void>({
            query: () => ({
                url: `/brands`,
            }),
            providesTags: ['getBrands']
        }),
    }
}

export default GetBrandsEndpoints