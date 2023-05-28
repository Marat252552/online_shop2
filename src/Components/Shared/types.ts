export enum ItemStatus {
    JustIn = 'Just in',
    Old = 'Old'
}

export type Item_T = {
    name: string,
    status: ItemStatus,
    price: string
}