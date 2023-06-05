import { LogoutOutlined } from "@ant-design/icons"
import UserSlice from "../../../../state/Reducers/UserSlice"
import { useAppDispatch } from "../../../../state/hooks" 
import { useEffect } from 'react'
import RestAPI from "../../../../API/RestAPI"

const LogoutButton = () => {
    let [logoutAPI, { isSuccess }] = RestAPI.useLogoutMutation()

    let { logout } = UserSlice.actions
    let dispatch = useAppDispatch()
    useEffect(() => {
        if (!isSuccess) return
        dispatch(logout())
    }, [isSuccess])
    return <>
        <LogoutOutlined
            style={{ color: 'white', background: 'black', padding: '4px', borderRadius: '5px' }}
            onClick={async () => { 
                localStorage.removeItem('accessToken')
                await logoutAPI()
             }}
        />
    </>
}

export default LogoutButton