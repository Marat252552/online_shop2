import { FieldErrors } from "react-hook-form"
import CustomTextField from "../../../../../UI/CustomTextField"
import { Inputs_T } from "../lib/types"
import {useState} from 'react'



const NameField = ({ register, errors }: { register: any, errors: FieldErrors<Inputs_T> }) => {
    let [value, setValue] = useState('')
    return <>
        <CustomTextField
            {...register('name', {
                required: 'Введите название',
                maxLength: 20
            })}
            InputLabelProps={{ style: { fontFamily: 'Montserrat' } }}
            value={value}
            onChange={e => {setValue(e.target.value)}}
            error={!!errors.name}
            id="outlined-basic"
            label={errors.name?.message || 'Название'}
            size='small'
            variant="outlined"
        />
    </>
}

export default NameField