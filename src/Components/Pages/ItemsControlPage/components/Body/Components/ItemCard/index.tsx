import { Button } from "antd"
import { Brand_T, Item_T, Type_T } from "../../../../../../Shared/types"
import ElementCard from "../../../../../../UI/ElementCard"
import { backendURL } from "../../../../../../App/config/env"


const ItemCard = ({ item, type, brand, deleteItem }: { item: Item_T, type: Type_T | undefined, brand: Brand_T | undefined, deleteItem: ({_id}: {_id: string}) => void }) => {
    return <>
        <ElementCard
            buttons={<>
                <Button onClick={() => {
                    deleteItem({_id: item._id})
                }}>Удалить товар</Button>
            </>}
            descriptions={<>
                <span>{item.name || 'Название'}</span>
                <span style={{fontSize: '10px'}}>{brand?.name || 'Производитель'}</span>
                <span style={{fontSize: '10px'}}>{type?.name || 'Категория'}</span>
                <span>{item.price + ' Рублей' || 'Цена'}</span>
            </>}
            imgSRC={backendURL + '/' + item.main_img_name}
        />
    </>
}

export default ItemCard