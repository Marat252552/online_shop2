import { Button } from "antd"
import ElementCard from "../../../../../../UI/ElementCard"
import { Brand_T } from "../../../../../../Shared/types"
import { backendURL } from "../../../../../../App/config/env"


const BrandCard = ({brand, deleteBrand}: {brand: Brand_T, deleteBrand: ({_id}: {_id: string}) => void}) => {
    return <>
        <ElementCard 
            buttons={<Button onClick={() => {
                deleteBrand({_id: brand._id})
            }}>Удалить брэнд</Button>}
            descriptions={<span>{brand.name}</span>}
            imgSRC={backendURL + '/' + brand.img_name}
        />
    </>
}

export default BrandCard