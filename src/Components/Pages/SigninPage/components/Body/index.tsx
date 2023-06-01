import sharedStyles from './../../../../Shared/styles.module.css'
import AuthAPI from '../../../../../API/AuthAPI/AuthAPI'
import { useEffect } from 'react'
import UserSlice from '../../../../../state/Reducers/UserSlice'
import { useAppDispatch } from '../../../../../state/hooks'
import FormComponent from './components/FormComponent'
import { useNavigate } from 'react-router-dom'


const Body = () => {
    let [signin, { data: signinData }] = AuthAPI.useSigninMutation()
    let { setToken, setUser } = UserSlice.actions
    let navigate = useNavigate()
    let dispatch = useAppDispatch()
    useEffect(() => {
        if (!signinData) return
        let {accessToken, user} = signinData
        dispatch(setUser({user}))
        dispatch(setToken({accessToken}))
        navigate('/')
    }, [signinData])

    return <div className={sharedStyles.small_max_width_container}>
        <span style={{ textAlign: 'center', fontSize: '50px' }}>CONTROL</span>
        <FormComponent signin={signin}/>
    </div>
}

export default Body