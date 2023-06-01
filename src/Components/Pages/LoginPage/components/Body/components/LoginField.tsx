import { FieldErrors } from "react-hook-form"
import CustomTextField from "../../../../../UI/CustomTextField"
import { Inputs_T } from "../lib/types"


const LoginField = ({ register, errors }: { register: any, errors: FieldErrors<Inputs_T> }) => {
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
            error={!!errors.login}
            id="outlined-basic"
            label={errors.login?.message || 'Логин'}
            size='small'
            variant="outlined" />
    </>
}

export default LoginField