import { useForm } from "react-hook-form"
import FormTemplate from "../../../../Templates/Other/FormTemplate"
import { Inputs_T } from "./lib/types"
import NameField from "./components/NameField"
import BlackOvalButton from "../../../../UI/BlackOvalButton"
import BrandField from "./components/BrandField"
import TypeField from "./components/TypeField"
import PriceField from "./components/PriceField"
import DescriptionField from "./components/DescriptionField"
import RestAPI from "../../../../../API/RestAPI"
import UploadField from "./components/UploadField"
import { useState, useEffect } from 'react'
import { v4 } from 'uuid'
import { useNavigate } from "react-router-dom"
import UploadMainImageField from "./components/UploadMainImageFiled"


const Form = () => {
    let [filesUIDs, setFilesUIDs] = useState<string[]>([])
    let [mainFileUID, setMainFileUID] = useState<string>('')

    let [session_id, setSession_id] = useState<string>('')

    let generateSessionId = () => {
        let id = v4()
        setSession_id(id)
    }

    useEffect(() => {
        generateSessionId()
    }, [])

    let [createItemAPI] = RestAPI.useCreateItemMutation()
    let navigate = useNavigate()
    let { data: brandsData } = RestAPI.useGetBrandsQuery()
    let { data: typesData } = RestAPI.useGetTypesQuery()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })

    const onSubmit = async ({ name, brand_id, description, price, type_id }: Inputs_T) => {
        createItemAPI({ payload: { name, brand_id, description, price, type_id, filesUIDs, mainFileUID }, session_id })
        generateSessionId()
        reset()
        navigate('/itemscontrol')
    }
    return <FormTemplate onSubmit={handleSubmit(onSubmit)}>

        <NameField
            errors={errors}
            register={register}
        />

        <BrandField
            register={register}
            brands={brandsData?.brands}
        />

        <TypeField
            register={register}
            types={typesData?.types}
        />

        <DescriptionField
            errors={errors}
            register={register}
        />

        <PriceField
            errors={errors}
            register={register}
        />

        <UploadMainImageField
            session_id={session_id}
            setMainFileUID={setMainFileUID}
        />

        <UploadField
            session_id={session_id}
            setFilesUIDs={setFilesUIDs}
        />


        <BlackOvalButton>Создать</BlackOvalButton>

    </FormTemplate>
}

export default Form