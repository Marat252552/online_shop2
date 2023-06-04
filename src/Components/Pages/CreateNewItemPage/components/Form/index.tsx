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
import { useState, useEffect } from 'react'
import { v4 } from 'uuid'
import { useNavigate } from "react-router-dom"
import UploadMainImageField from "./components/UploadMainImageField"
import UploadOtherImagesField from "./components/UploadOtherImagesField"


const Form = () => {
    // unique session_id that's used to work with images uploading and using on them backend
    let [session_id, setSession_id] = useState<string>('')

    let generateSessionId = () => {
        let id = v4()
        setSession_id(id)
    }
    // generating session_id after mounting Form component
    useEffect(() => {
        generateSessionId()
    }, [])

    // initializing Rest API
    let [createItemAPI] = RestAPI.useCreateItemMutation()
    let { data: brandsData } = RestAPI.useGetBrandsQuery()
    let { data: typesData } = RestAPI.useGetTypesQuery()

    // initializing react-hook-form
    const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })

    // actions to be completed after pressing onSubmit button
    let navigate = useNavigate()
    const onSubmit = async ({ name, brand_id, description, price, type_id, mainImageUID, imagesUIDs }: Inputs_T) => {
        createItemAPI({ payload: { name, brand_id, description, price, type_id, imagesUIDs, mainFileUID: mainImageUID }, session_id })
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
            errors={errors}
            register={register}
            session_id={session_id}
        />

        <UploadOtherImagesField
            getValues={getValues}
            errors={errors}
            session_id={session_id}
            register={register}
        />

        <BlackOvalButton>Создать</BlackOvalButton>

    </FormTemplate>
}

export default Form