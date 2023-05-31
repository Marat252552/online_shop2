import sharedStyles from './../../../../Shared/styles.module.css'
import FormTemplate from '../../../../Templates/Other/FormTemplate'
import BlackOvalButton from '../../../../UI/BlackOvalButton'
import CustomCheckbox from '../../../../UI/CustomCheckbox'
import LoginSuggest from './components/LoginSuggest'
import { Inputs_T } from './lib/types'
import { useForm } from 'react-hook-form'
import AuthAPI from '../../../../../API/AuthAPI/AuthAPI'
import LoginField from './components/LoginField'
import PasswordField from './components/PasswordField'
import PasswordField2 from './components/Password2'
import { useEffect } from 'react'
import UserSlice from '../../../../../state/Reducers/UserSlice'
import { User_T } from '../../../../Shared/types'
import { useAppDispatch } from '../../../../../state/hooks'


const Body = () => {
    let {data: loggedData} = AuthAPI.useIsLoggedQuery()
    
    let [signin, { data }] = AuthAPI.useSigninMutation()
    let { setData } = UserSlice.actions
    let dispatch = useAppDispatch()
    const setUserData = (user: User_T) => {
        dispatch(setData(user))
    }
    useEffect(() => {
        if (!data) return
        localStorage.setItem('AccessToken', data.AccessToken)
        setUserData(data.user)
    }, [data])
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })
    const onSubmit = async (values: Inputs_T) => {
        let signinData = { login: values.login, password: values.password }
        signin(signinData)
    }
    return <div className={sharedStyles.small_max_width_container}>
        <span style={{ textAlign: 'center', fontSize: '50px' }}>CONTROL</span>

        <FormTemplate onSubmit={handleSubmit(onSubmit)}>

            <LoginField errors={errors} register={register} />

            <PasswordField errors={errors} register={register} />

            <PasswordField2 errors={errors} register={register} />

            <CustomCheckbox text='Запомнить меня' />

            <BlackOvalButton type='submit'>Создать аккаунт</BlackOvalButton>

            <LoginSuggest />
        </FormTemplate>
    </div>
}

export default Body