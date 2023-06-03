import CustomTextField from "../../../../../UI/CustomTextField"
import { useState } from 'react'
import { Inputs_T } from "../lib/types"
import { FieldErrors, UseFormRegister } from "react-hook-form"


const PriceField = ({ errors, register }: { errors: FieldErrors<Inputs_T>, register: UseFormRegister<Inputs_T> }) => {
    let [value, setValue] = useState('')
    let onChange = (e: any) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setValue(e.target.value)
        }
    }
    return <>
        <CustomTextField
            {...register('price', {
                required: 'Укажите стоимость в рублях',
                maxLength: 10
            })}
            value={value}
            onChange={onChange}
            error={!!errors.price}
            id="outlined-basic"
            InputLabelProps={{ style: { fontFamily: 'Montserrat' } }}
            label={errors.price?.message || 'Стоимость в рублях'}
            size='small'
            variant="outlined"
        />
    </>
}

export default PriceField