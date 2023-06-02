import { UseFormRegister } from "react-hook-form"
import { Inputs_T } from "../lib/types"
import { Type_T } from "../../../../../Shared/types"


const TypeField = ({ register, types }: { register: UseFormRegister<Inputs_T>, types: Type_T[] | undefined }) => {
    return <>
        <span>Выберите категорию</span>
        <select
            {...register("type_id", {
                required: 'Выберите категорию'
            })}
            style={{ width: '100%' }}
        >
            {types && types.map(type => {
                return <option value={type._id}>{type.name}</option>
            })}
        </select>
    </>
}

export default TypeField