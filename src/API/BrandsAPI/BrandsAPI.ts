import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { Brand_T } from '../../Components/Shared/types'
import baseQueryWithReauth from '../BaseQueryWithReauth'


const BrandsAPI = createApi({
    reducerPath: 'brandsAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['getBrands'],
    endpoints: (build) => ({
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
            invalidatesTags: ['getBrands']
        }),
        getBrands: build.query<{ brands: Brand_T[] }, void>({
            query: () => ({
                url: `/brands`,
            }),
            providesTags: ['getBrands']
        }),
    })
})

export default BrandsAPI