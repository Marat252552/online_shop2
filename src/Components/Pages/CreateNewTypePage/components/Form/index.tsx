import { useForm } from "react-hook-form"
import FormTemplate from "../../../../Templates/Other/FormTemplate"
import { Inputs_T } from "./lib/types"
import NameField from "./components/NameField"
import BlackOvalButton from "../../../../UI/BlackOvalButton"
import RestAPI from "../../../../../API/RestAPI"
import { useNavigate } from "react-router-dom"


const Form = () => {
    let [createType] = RestAPI.useCreateTypeMutation()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })

    let navigate = useNavigate()
    
    const onSubmit = async ({ name }: Inputs_T) => {
        createType({name})
        navigate('/typescontrol')
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