import { FieldErrors } from "react-hook-form"
import CustomTextField from "../../../../../UI/CustomTextField"
import { Inputs_T } from "../lib/types"
import RestAPI from "../../../../../../API/RestAPI"



const LoginField = ({ register, errors }: { register: any, errors: FieldErrors<Inputs_T> }) => {
    let [isLoginDupl, { data }] = RestAPI.useIsLoginDuplMutation()
    return <>
        <CustomTextField
            {...register('login', {
                required: 'Введите логин',
                maxLength: 20,
                pattern: {
                    value: /^[a-z0-9]+$/i,
                    message: 'Допустимы только латинские символы'
                },
            })}
            onChange={e => { isLoginDupl(e.target.value) }}
            error={!!errors.login || data?.response}
            id="outlined-basic"
            label={(data?.response) ? 'Логин занят' : undefined || errors.login?.message || 'Логин'}
            size='small'
            variant="outlined"
        />
    </>
}

export default LoginField