import { useForm } from "react-hook-form"
import FormTemplate from "../../../../Templates/Other/FormTemplate"
import { Inputs_T } from "./lib/types"
import NameField from "./components/NameField"
import { useState, useEffect } from 'react'
import BlackOvalButton from "../../../../UI/BlackOvalButton"
import BrandsAPI from "../../../../../API/BrandsAPI/BrandsAPI"
import { useNavigate } from "react-router-dom"
import TypesAPI from "../../../../../API/TypesAPI/TypesAPI"


const Form = () => {
    let [createType] = TypesAPI.useCreateTypeMutation()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })
    let navigate = useNavigate()

    const onSubmit = async ({ name }: Inputs_T) => {
        createType({name})
        reset()
    }
    return <FormTemplate onSubmit={handleSubmit(onSubmit)}>

        <NameField
            errors={errors}
            register={register}
        />

        <BlackOvalButton>Создать</BlackOvalButton>

    </FormTemplate>
}

export default Form