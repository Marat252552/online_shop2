import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import TypeCard from "./Components/TypeCard"
import RestAPI from "../../../../../API/RestAPI"
import LargeModuleTemplate from "../../../../Templates/Modules/LargeModuleTemplate"



const Body = () => {
    let { data } = RestAPI.useGetTypesQuery()
    let [deleteType] = RestAPI.useDeleteTypeMutation()
    let navigate = useNavigate()
    return <>
        <LargeModuleTemplate>
            <Button onClick={() => { navigate('/createtype') }}>Создать новую категорию</Button>
            {data?.types && data.types.map(type => {
                return <TypeCard
                    deleteType={deleteType}
                    type={type}
                    key={type._id}
                />
            })}
        </LargeModuleTemplate>
    </>
}

export default Body