import { useForm } from "react-hook-form"
import { Inputs_T } from "../lib/types"
import FormTemplate from "../../../../../Templates/Other/FormTemplate"
import LoginField from "./LoginField"
import PasswordField2 from "./Password2"
import PasswordField from "./PasswordField"
import CustomCheckbox from "../../../../../UI/CustomCheckbox"
import BlackOvalButton from "../../../../../UI/BlackOvalButton"
import LoginSuggest from "./LoginSuggest"
import { SigninReq_T } from "../../../../../Shared/types"


const FormComponent = ({ signin }: { signin: any }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })
    const onSubmit = async ({login, password, remember}: Inputs_T) => {
        let signinData: SigninReq_T = { login, password, remember }
        signin(signinData)
    }
    return <>
        <FormTemplate onSubmit={handleSubmit(onSubmit)}>

            <LoginField errors={errors} register={register} />

            <PasswordField errors={errors} register={register} />

            <PasswordField2 errors={errors} register={register} />

            <CustomCheckbox register={register} text='Запомнить меня' />

            <BlackOvalButton type='submit'>Создать аккаунт</BlackOvalButton>

            <LoginSuggest />

        </FormTemplate>
    </>
}

export default FormComponent