import { createApi } from '@reduxjs/toolkit/dist/query/react'
import baseQueryWithReauth from './BaseQueryWithReauth'
import GetBrandsEndpoints from './Endpoints/GetBrandsEndpoints'
import GetItemsEndpoints from './Endpoints/ItemsEndpoints'
import { Build_T } from './types'
import GetTypesEndpoints from './Endpoints/GetTypesEndpoints'
import GetCartEndpoints from './Endpoints/GetCartEndpoints'
import GetFavoritesEndpoints from './Endpoints/GetFavoritesEndpoints'
import GetAuthEndpoints from './Endpoints/GetAuthEndpoints'
import GetAdminEndpoints from './Endpoints/GetAdminEndpoints'


let generateEndpoints = (build: Build_T) => {
    let BrandsEndpoints = GetBrandsEndpoints(build)
    let ItemsEndpoints = GetItemsEndpoints(build)
    let TypesEndpoints = GetTypesEndpoints(build)
    let CartEndpoints = GetCartEndpoints(build)
    let FavoritesEndpoints = GetFavoritesEndpoints(build)
    let AuthEndpoints = GetAuthEndpoints(build)
    let AdminEndpoints = GetAdminEndpoints(build)
    let endpoints = {
        ...BrandsEndpoints,
        ...ItemsEndpoints,
        ...TypesEndpoints,
        ...CartEndpoints,
        ...FavoritesEndpoints,
        ...AuthEndpoints,
        ...AdminEndpoints
    }
    return endpoints
}

const RestAPI = createApi({
    reducerPath: 'restAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['getItems', 'getBrands', 'getTypes', 'getRating', 'getCartItems', 'getCartItemAmount', 'getFavorites', 'getUsers'],
    endpoints: (build: Build_T) => generateEndpoints(build)
})

export default RestAPI