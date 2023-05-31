import { FieldErrors, UseFormRegister } from "react-hook-form"
import CustomTextField from "../../../../../UI/CustomTextField"
import { Inputs_T } from "../lib/types"



const PasswordField2 = ({register, errors}: {register: UseFormRegister<Inputs_T>, errors: FieldErrors<Inputs_T>}) => {
    return <>
        <CustomTextField
            {...register('password2', {
                required: 'Подтвердите пароль',
                validate: (value, formValues) => {
                    if (value !== formValues.password) {
                        return 'Пароли не совпадают'
                    }
                }
            })}
            label={errors.password2?.message || 'Подтверждение пароля'}
            error={!!errors.password2}
            id="outlined-basic"
            type='password'
            size='small'
            variant="outlined" />
    </>
}

export default PasswordField2