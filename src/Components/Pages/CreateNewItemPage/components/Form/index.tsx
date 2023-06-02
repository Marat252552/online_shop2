import { useForm } from "react-hook-form"
import FormTemplate from "../../../../Templates/Other/FormTemplate"
import { Inputs_T } from "./lib/types"
import NameField from "./components/NameField"
import BlackOvalButton from "../../../../UI/BlackOvalButton"
import BrandsAPI from "../../../../../API/BrandsAPI/BrandsAPI"
import ItemsAPI from "../../../../../API/ItemsAPI/ItemsAPI"
import BrandField from "./components/BrandField"
import TypesAPI from "../../../../../API/TypesAPI/TypesAPI"
import TypeField from "./components/TypeField"
import PriceField from "./components/PriceField"
import DescriptionField from "./components/DescriptionField"


const Form = () => {
    let [createItemAPI] = ItemsAPI.useCreateItemMutation()
    let { data: brandsData } = BrandsAPI.useGetBrandsQuery()
    let { data: typesData } = TypesAPI.useGetTypesQuery()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })

    const onSubmit = async ({ name, filesList, brand_id, description, price, type_id }: Inputs_T) => {
        console.log(brand_id)
        let formData = new FormData()
        formData.append('name', name)
        formData.append('brand_id', brand_id)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('type_id', type_id)
        formData.append('img', filesList[0])
        createItemAPI(formData)
        reset()
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