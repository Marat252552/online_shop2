import { FieldErrors, UseFormRegister } from "react-hook-form"
import CustomTextField from "../../../../../UI/CustomTextField"
import { Inputs_T } from "../lib/types"



const DescriptionField = ({ register, errors }: { register: UseFormRegister<Inputs_T>, errors: FieldErrors<Inputs_T> }) => {
    return <>
        <CustomTextField
            {...register('description', {
                required: 'Введите описание',
                maxLength: 100
            })}
            multiline
            error={!!errors.description}
            id="outlined-basic"
            size='medium'
            variant="outlined"
        />
    </>
}

export default DescriptionField