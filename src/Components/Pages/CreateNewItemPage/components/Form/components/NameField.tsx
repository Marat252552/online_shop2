import { FieldErrors } from "react-hook-form"
import CustomTextField from "../../../../../UI/CustomTextField"
import { Inputs_T } from "../lib/types"



const NameField = ({ register, errors }: { register: any, errors: FieldErrors<Inputs_T> }) => {
    return <>
        <CustomTextField
            {...register('name', {
                required: 'Введите название',
                maxLength: 20
            })}
            InputLabelProps={{ style: { fontFamily: 'Montserrat' } }}
            error={!!errors.name}
            id="outlined-basic"
            label={errors.name?.message || 'Название'}
            size='small'
            variant="outlined"
        />
    </>
}

export default NameField