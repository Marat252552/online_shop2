import { Type_T } from "../../Components/Shared/types";
import { Build_T } from "../types";



const GetTypesEndpoints = (build: Build_T) => {
    return {
        createType: build.mutation<{ response: boolean }, {name: string}>({
            query: ({name}: {name: string}) => ({
                url: `/types`,
                method: 'POST',
                body: {name}
            }),
            invalidatesTags: ['getTypes']
        }),
        deleteType: build.mutation<void, {_id: string}>({
            query: ({_id}: {_id: string}) => ({
                url: `/types`,
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: ['getTypes', 'getItems']
        }),
        getTypes: build.query<{ types: Type_T[] }, void>({
            query: () => ({
                url: `/types`,
            }),
            providesTags: ['getTypes']
        }),
    }
}

export default GetTypesEndpoints