export enum ItemStatus {
    JustIn = 'Just in',
    Old = 'Old'
}

export type Item_T = {
    name: string,
    status: ItemStatus,
    price: string
}

export type Link_T = {
    name: string,
    path: string
}

export type SigninData_T = {
    login: string,
    password: string
}