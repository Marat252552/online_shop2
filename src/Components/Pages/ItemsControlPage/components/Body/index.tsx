import { Button } from "antd"
import { Element_T } from "../../../../Shared/types"
import FilterBodyTemplate from "../../../../Templates/Body/FilterBodyTemplate"
import { useNavigate } from "react-router-dom"
import ItemsAPI from "../../../../../API/ItemsAPI/ItemsAPI"
import ItemCard from "./Components/ItemCard"
import TypesAPI from "../../../../../API/TypesAPI/TypesAPI"
import BrandsAPI from "../../../../../API/BrandsAPI/BrandsAPI"


const Body = () => {
    let elements: Element_T[] = [
        { title: 'Apple', value: 'Apple' }
    ]
    let { data: itemsData } = ItemsAPI.useGetItemsQuery()
    let { data: typesData } = TypesAPI.useGetTypesQuery()
    let { data: brandsData } = BrandsAPI.useGetBrandsQuery()
    let [deleteItem] = ItemsAPI.useDeleteItemMutation()
    let navigate = useNavigate()
    return <>
        <FilterBodyTemplate
            elements={elements}
            listModule={<>
                <Button onClick={() => { navigate('/createitem') }}>Создать товар</Button>
                {itemsData?.items && itemsData.items.map(item => {
                    let brand = brandsData?.brands.find(el => el._id === item.brand_id)
                    let type = typesData?.types.find(el => el._id === item.type_id)
                    return <ItemCard
                        deleteItem={deleteItem}
                        brand={brand}
                        type={type}
                        key={item._id}
                        item={item}
                    />
                })}
            </>}
        />
    </>
}

export default Body