import { Checkbox } from "@mui/material"
import CustomCheckbox from "../../../../../UI/CustomCheckbox"


const CheckboxField = ({ register }: { register: any }) => {
    return <>
        <CustomCheckbox
            text="Запомнить меня"
            register={register}
        />
    </>
}

export default CheckboxField

