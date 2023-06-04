import CustomTextField from "../../../../../UI/CustomTextField"
import { useState } from 'react'
import { Inputs_T } from "../lib/types"
import { FieldErrors, UseFormRegister } from "react-hook-form"


const PriceField = ({ errors, register }: { errors: FieldErrors<Inputs_T>, register: UseFormRegister<Inputs_T> }) => {
    
    let [value, setValue] = useState('')

    const { onChange, onBlur, name, ref, required } = register('price', {
        required: 'Укажите стоимость'
    });

    let handleChange = (e: any) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setValue(e.target.value)
            let newE = {target: {value: e.target.value, name}}
            onChange(newE)
        }
    }
    
    return <>
        <CustomTextField
            onBlur={onBlur}
            value={value}
            onChange={handleChange}
            name={name}
            ref={ref}
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