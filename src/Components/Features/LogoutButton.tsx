import { LogoutOutlined } from "@ant-design/icons"
import AuthAPI from "../../API/AuthAPI/AuthAPI"
import UserSlice from "../../state/Reducers/UserSlice"
import { useAppDispatch } from "../../state/hooks" 
import { useEffect } from 'react'

const LogoutButton = () => {
    let [logoutAPI, { isSuccess }] = AuthAPI.useLogoutMutation()

    let { logout } = UserSlice.actions
    let dispatch = useAppDispatch()
    useEffect(() => {
        if (!isSuccess) return
        dispatch(logout())
    }, [isSuccess])
    return <>
        <LogoutOutlined
            style={{ color: 'white', background: 'black', padding: '4px', borderRadius: '5px' }}
            onClick={() => { logoutAPI() }}
        />
    </>
}

export default LogoutButton