export enum ItemStatus {
    JustIn = 'Just in',
    Old = 'Old'
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

export enum Statuses {
    user = 'USER',
    manager = 'MANAGER',
    admin = 'ADMIN'
}

export type User_T = {
    _id: string,
    login: string,
    status: Statuses
}

export type Element_T = {
    name: string,
    _id: string
}

export type Brand_T = {
    _id: string,
    name: string,
    img_name: string
}

export type Item_T = {
    _id: string,
    name: string,
    brand_id: string,
    type_id: string,
    img_name: string,
    description: string,
    price: number
}

export type Type_T = {
    _id: string,
    name: string
}