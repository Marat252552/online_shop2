import { useForm } from "react-hook-form"
import FormTemplate from "../../../../Templates/Other/FormTemplate"
import { Inputs_T } from "./lib/types"
import NameField from "./components/NameField"
import BlackOvalButton from "../../../../UI/BlackOvalButton"
import RestAPI from "../../../../../API/RestAPI"


const Form = () => {
    let [createType] = RestAPI.useCreateTypeMutation()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })

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