import { useEffect } from "react"
import AuthAPI from "../../API/AuthAPI/AuthAPI"
import { useAppDispatch } from "../../state/hooks"
import UserSlice from "../../state/Reducers/UserSlice"


const IsLoggedContainer = ({children}: {children: JSX.Element}) => {
    let {data: loggedData} = AuthAPI.useIsLoggedQuery()
    let { setUser, setToken } = UserSlice.actions
    let dispatch = useAppDispatch()
    useEffect(() => {
        if (!loggedData) return
        let {accessToken, user} = loggedData
        dispatch(setUser({user}))
        dispatch(setToken({accessToken}))
    }, [loggedData])
    return <>
        {children}
    </>
}

export default IsLoggedContainer