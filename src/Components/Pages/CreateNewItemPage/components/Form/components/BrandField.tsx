import { UseFormRegister } from "react-hook-form"
import { Inputs_T } from "../lib/types"
import { Brand_T } from "../../../../../Shared/types"


const BrandField = ({ register, brands }: { register: UseFormRegister<Inputs_T>, brands: Brand_T[] | undefined }) => {
    return <>
        <span>Выберите производителя</span>
        <select
            {...register("brand_id", {
                required: 'Выберите производителя'
            })}
            style={{ width: '100%' }}
        >
            {brands && brands.map(brand => {
                return <option
                    key={brand._id}
                    value={brand._id}
                >{brand.name}</option>
            })}
        </select>
    </>
}

export default BrandField