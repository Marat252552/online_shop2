import { useForm } from "react-hook-form"
import FormTemplate from "../../../../Templates/Other/FormTemplate"
import { Inputs_T } from "./lib/types"
import NameField from "./components/NameField"
import { useState, useEffect } from 'react'
import BlackOvalButton from "../../../../UI/BlackOvalButton"
import BrandsAPI from "../../../../../API/BrandsAPI/BrandsAPI"
import { useNavigate } from "react-router-dom"


const Form = () => {
    let [createBrandAPI, { isSuccess }] = BrandsAPI.useCreateBrandMutation()
    const { register, handleSubmit, reset, formState: { errors }} = useForm<Inputs_T>({
        mode: 'onSubmit'
    })
    let navigate = useNavigate()
    useEffect(() => {
        console.log(isSuccess)
        if (isSuccess) {navigate('/brands')}
    }, [isSuccess])
    const onSubmit = async ({ name, filesList }: Inputs_T) => {
        let formData = new FormData()
        formData.append('name', name)
        formData.append('img', filesList[0])
        createBrandAPI(formData)
        reset()
    }
    return <FormTemplate onSubmit={handleSubmit(onSubmit)}>

        <NameField
            errors={errors}
            register={register}
        />

        <input
            {...register('filesList', {
                required: 'Загрузите изображение'
            })}
            type='file'
        />
        {errors.filesList?.message && <div>{errors.filesList.message.toString as any}</div>}

        <BlackOvalButton>Создать</BlackOvalButton>

    </FormTemplate>
}

export default Form