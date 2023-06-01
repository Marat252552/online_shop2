import AuthAPI from '../../../API/AuthAPI/AuthAPI'
import UserSlice from '../../../state/Reducers/UserSlice'
import { useAppDispatch } from '../../../state/hooks'
import PageMainTemplate from '../../Templates/Pages/PageMainTemplate'
import Body from './components/Body'
import {useEffect} from 'react'


const LoginPage = () => {
    
    return <>
        <PageMainTemplate>
            <Body />
        </PageMainTemplate>
    </>
}

export default LoginPage