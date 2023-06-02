import { User_T } from "../../../Shared/types"

export type API_T = ({ _id }: { _id: string }) => void

export type Props_T = { 
    user: User_T, 
    deleteUser: API_T, 
    grantAccess: API_T, 
    lowerAccess: API_T }