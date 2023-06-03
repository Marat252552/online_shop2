import { createApi } from '@reduxjs/toolkit/dist/query/react'
import baseQueryWithReauth from './BaseQueryWithReauth'
import GetBrandsEndpoints from './Endpoints/GetBrandsEndpoints'
import GetItemsEndpoints from './Endpoints/ItemsEndpoints'
import { Build_T } from './types'
import GetTypesEndpoints from './Endpoints/GetTypesEndpoints'


let generateEndpoints = (build: Build_T) => {
    let BrandsEndpoints = GetBrandsEndpoints(build)
    let ItemsEndpoints = GetItemsEndpoints(build)
    let TypesEndpoints = GetTypesEndpoints(build)
    let endpoints = {
        ...BrandsEndpoints,
        ...ItemsEndpoints,
        ...TypesEndpoints,
    }
    return endpoints
}

const RestAPI = createApi({
    reducerPath: 'restAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['getItems', 'getBrands', 'getTypes'],
    endpoints: (build: Build_T) => generateEndpoints(build)
})

export default RestAPI