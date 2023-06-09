import { useForm } from "react-hook-form"
import FormTemplate from "../../../../Templates/Other/FormTemplate"
import { Inputs_T } from "./lib/types"
import NameField from "./components/NameField"
import { useEffect } from 'react'
import BlackOvalButton from "../../../../UI/BlackOvalButton"
import { useNavigate } from "react-router-dom"
import RestAPI from "../../../../../API/RestAPI"
import UploadMainImageField from "./components/UploadMainImageField"
import {useState} from 'react'
import { v4 } from "uuid"


const Form = () => {
    let [createBrandAPI, { isSuccess }] = RestAPI.useCreateBrandMutation()

    let [session_id, setSession_id] = useState<string>('')
    let generateSessionId = () => {
        let newSessionId = v4()
        setSession_id(newSessionId)
    }
    useEffect(() => {
        generateSessionId()
    }, [])

    const { register, handleSubmit, formState: { errors }} = useForm<Inputs_T>({
        mode: 'onSubmit'
    })
    let navigate = useNavigate()
    useEffect(() => {
        console.log(isSuccess)
        if (isSuccess) {navigate('/brands')}
    }, [isSuccess])
    const onSubmit = async ({ name, main_img_UID }: Inputs_T) => {
        let formData = new FormData()
        formData.append('name', name)
        formData.append('main_img_UID', main_img_UID)
        formData.append('session_id', session_id)
        createBrandAPI(formData)
        navigate('/brands')
    }
    return <FormTemplate onSubmit={handleSubmit(onSubmit)}>

        <NameField
            errors={errors}
            register={register}
        />

        <UploadMainImageField 
            session_id={session_id}
            errors={errors}
            register={register}
        />

        <BlackOvalButton>Создать</BlackOvalButton>

    </FormTemplate>
}

export default Form