import sharedStyles from './../../../../Shared/styles.module.css'
import FormTemplate from '../../../../Templates/Other/FormTemplate'
import CustomTextField from '../../../../UI/CustomTextField'
import BlackOvalButton from '../../../../UI/BlackOvalButton'
import CustomCheckbox from '../../../../UI/CustomCheckbox'
import LoginSuggest from './components/LoginSuggest'
import { Inputs_T } from './lib/types'
import { useForm } from 'react-hook-form'
import AuthAPI from '../../../../../API/AuthAPI'
import LoginField from './components/LoginField'
import PasswordField from './components/PasswordField'
import PasswordField2 from './components/Password2'


const Body = () => {
    let [signin] = AuthAPI.useSigninMutation()
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })
    const onSubmit = async (values: Inputs_T) => {
        let signinData = { login: values.login, password: values.password }
        let response = await signin(signinData)
        console.log(response)
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