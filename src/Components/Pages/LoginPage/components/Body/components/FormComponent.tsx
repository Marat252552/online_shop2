import { useForm } from "react-hook-form"
import FormTemplate from "../../../../../Templates/Other/FormTemplate"
import { Inputs_T } from "../lib/types"
import LoginField from "./LoginField"
import PasswordField from "./PasswordField"
import CheckboxField from "./CheckboxField"
import BlackOvalButton from "../../../../../UI/BlackOvalButton"
import SigninSuggest from "./SigninSuggest"
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks"
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, MutationDefinition } from "@reduxjs/toolkit/dist/query"
import { LoginReq_T, User_T } from "../../../../../Shared/types"

type loginAPI_T = MutationTrigger<MutationDefinition<LoginReq_T, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, never, {
    user: User_T;
    accessToken: string;
}, "authAPI">>

const FormComponent = ({loginAPI}: {loginAPI: loginAPI_T}) => {
    const { register, handleSubmit, formState: { errors} } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })
    const onSubmit = async ({login, password, remember}: Inputs_T) => {
        let loginData: LoginReq_T = { login, password, remember }
        loginAPI(loginData)
    }
    return <>
        <FormTemplate onSubmit={handleSubmit(onSubmit)}>

            <LoginField errors={errors} register={register}/>

            <PasswordField errors={errors} register={register}/>

            <CheckboxField register={register}/>

            <BlackOvalButton type='submit'>Войти</BlackOvalButton>

            <SigninSuggest />

        </FormTemplate>
    </>
}

export default FormComponent