import { Button } from "antd"
import { Item_T } from "../../../../../../Shared/types"
import ElementCard from "../../../../../../UI/ElementCard"
import { backendURL } from "../../../../../../App/config/env"


const ItemCard = ({item}: {item: Item_T}) => {
    return <>
        <ElementCard 
            buttons={<>
                <Button>Удалить товар</Button>
            </>}
            descriptions={<span>{item.description}</span>}
            imgSRC={backendURL + '/' + item.img_name}
        />
    </>
}

export default ItemCard