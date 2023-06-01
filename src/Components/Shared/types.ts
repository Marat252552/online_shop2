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

export type LoginReq_T = {
    login: string,
    password: string,
    remember: boolean
}

export type SigninReq_T = {
    login: string,
    password: string,
    remember: boolean
}

export type User_T = {
    _id: string,
    login: string
}
