import SmallModuleTemplate from '../../../../Templates/Modules/SmallModuleTemplate';
import UserSlice from '../../../../../state/Reducers/UserSlice';
import { useAppDispatch } from '../../../../../state/hooks';
import {useEffect} from 'react'
import FormComponent from './components/FormComponent';
import { useNavigate } from 'react-router-dom';
import RestAPI from '../../../../../API/RestAPI';


const Body = () => {
    let [loginAPI, {data: loginData, isSuccess, isError, error}] = RestAPI.useLoginMutation()
    let {setToken, setUser} = UserSlice.actions
    let dispatch = useAppDispatch()
    let navigate = useNavigate()
    useEffect(() => {
        if(isSuccess && loginData) {
            let {user, accessToken} = loginData
            dispatch(setUser({user}))
            dispatch(setToken({accessToken}))
            navigate('/')
        }
    }, [isSuccess])
    return <>
        <SmallModuleTemplate>
        
        <span style={{ textAlign: 'center', fontSize: '50px' }}>CONTROL</span>
        {/* @ts-ignore */}
        {isError && <div style={{textAlign: 'center'}}>{error?.data?.message || 'Произошла непредвиденная ошибка'}</div>}
            <FormComponent loginAPI={loginAPI}/>
        </SmallModuleTemplate>
    </>
}

export default Body