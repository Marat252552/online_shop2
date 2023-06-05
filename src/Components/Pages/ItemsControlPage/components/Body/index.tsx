import { Button } from "antd"
import FilterBodyTemplate from "../../../../Templates/Body/FilterBodyTemplate"
import { useNavigate } from "react-router-dom"
import ItemCard from "./Components/ItemCard"
import RestAPI from "../../../../../API/RestAPI"
import {useState, useEffect} from 'react'


const Body = () => {
    let [selectedBrands, setSelectedBrands] = useState<string[]>([])
    let [selectedTypes, setSelectedTypes] = useState<string[]>([])
    
    useEffect(() => {
        console.log(selectedBrands, selectedTypes)
    }, [selectedBrands, selectedTypes])

    let { data: itemsData } = RestAPI.useGetItemsQuery({brands: selectedBrands, types: selectedTypes, searchValue: ''})
    let { data: typesData } = RestAPI.useGetTypesQuery()
    let { data: brandsData } = RestAPI.useGetBrandsQuery()
    let [deleteItem] = RestAPI.useDeleteItemMutation()
    let navigate = useNavigate()
    return <>
        <FilterBodyTemplate
        // @ts-ignore
            selectedBrands={selectedBrands}
            selectedTypes={selectedTypes}
            setSelectedBrands={setSelectedBrands}
            setSelectedTypes={setSelectedTypes}
            brands={brandsData?.brands}
            types={typesData?.types}
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