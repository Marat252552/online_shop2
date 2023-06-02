import { Button } from "antd"
import BrandCard from "./Components/BrandCard"
import { useNavigate } from "react-router-dom"
import RestAPI from "../../../../../API/RestAPI"
import LargeModuleTemplate from "../../../../Templates/Modules/LargeModuleTemplate"


const Body = () => {
    let { data } = RestAPI.useGetBrandsQuery()
    let [deleteBrand] = RestAPI.useDeleteBrandMutation()
    let navigate = useNavigate()
    return <>
        <LargeModuleTemplate>
            <Button onClick={() => { navigate('/createbrand') }}>Создать новый брэнд</Button>
            {data?.brands && data.brands.map(brand => {
                return <BrandCard
                    key={brand._id}
                    deleteBrand={deleteBrand}
                    brand={brand}
                />
            })}
        </LargeModuleTemplate>
    </>
}

export default Body