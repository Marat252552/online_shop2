import { Button } from "antd"
import { Brand_T, Element_T } from "../../../../Shared/types"
import FilterBodyTemplate from "../../../../Templates/Body/FilterBodyTemplate"
import BrandCard from "./Components/BrandCard"
import { useNavigate } from "react-router-dom"
import BrandsAPI from "../../../../../API/BrandsAPI/BrandsAPI"



const Body = () => {
    let { data } = BrandsAPI.useGetBrandsQuery()
    let [deleteBrand] = BrandsAPI.useDeleteBrandMutation()
    let brands: Element_T[] = [
        { title: 'Apple', value: 'Apple' },
        { title: 'Microsoft', value: 'Microsoft' }
    ]
    let navigate = useNavigate()
    return <>
        <FilterBodyTemplate
            elements={brands}
            listModule={<>
                <Button onClick={() => { navigate('/createbrand') }}>Создать новый брэнд</Button>
                {data?.brands && data.brands.map(brand => {
                    return <BrandCard
                        key={brand._id}
                        deleteBrand={deleteBrand}
                        brand={brand}
                    />
                })}
            </>}
        />
    </>
}

export default Body