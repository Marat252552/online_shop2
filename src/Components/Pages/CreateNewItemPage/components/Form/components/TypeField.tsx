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
            style={{ width: '100%', border: 'solid 1px #E0E3E7', borderRadius: '3px', fontFamily: 'Montserrat', padding: '10px' }}
        >
            {types && types.map(type => {
                return <option
                    style={{padding: '30px'}}
                    key={type._id}
                    value={type._id}
                >
                    <span >{type.name}</span>
                </option>
            })}
        </select>
    </>
}

export default TypeField