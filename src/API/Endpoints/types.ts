export type CreateItemReq_T = {
    session_id: string,
    payload: {
        name: string
        brand_id: string,
        description: string,
        price: number,
        type_id: string,
        filesUIDs: string[]
    }
}