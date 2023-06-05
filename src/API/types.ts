import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export type Build_T = EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
    "getItems" | 'getCartItemAmount' | "getUsers" | "getBrands" | "getTypes" | "getRating" | "getCartItems" | "getFavorites",
    "restAPI">
