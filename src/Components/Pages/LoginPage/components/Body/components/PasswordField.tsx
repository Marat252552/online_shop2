import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Inputs_T } from "../lib/types"
import CustomTextField from "../../../../../UI/CustomTextField"



const PasswordField = ({ register, errors }: { register: UseFormRegister<Inputs_T>, errors: FieldErrors<Inputs_T> }) => {
    return <>
        <CustomTextField
            {...register('password', {
                required: 'Введите пароль',
                pattern: {
                    value: /^[a-z0-9]+$/i,
                    message: 'Допустимы только латинские символы'
                }
            })}
            id="outlined-basic"
            error={!!errors.password?.message}
            type='password'
            label={errors.password?.message || 'Пароль'}
            size='small'
            variant="outlined" />
    </>
}

export default PasswordField