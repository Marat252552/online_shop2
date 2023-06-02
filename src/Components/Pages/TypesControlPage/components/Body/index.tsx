import { Button } from "antd"
import { Element_T } from "../../../../Shared/types"
import FilterBodyTemplate from "../../../../Templates/Body/FilterBodyTemplate"
import { useNavigate } from "react-router-dom"
import TypesAPI from "../../../../../API/TypesAPI/TypesAPI"
import TypeCard from "./Components/TypeCard"



const Body = () => {
    let elements: Element_T[] = [
        { value: 'Холодильник', title: 'Холодильник' }
    ]
    let { data } = TypesAPI.useGetTypesQuery()
    let [deleteType] = TypesAPI.useDeleteTypeMutation()
    let navigate = useNavigate()
    return <>
        <FilterBodyTemplate
            elements={elements}
            listModule={<>
                <Button onClick={() => { navigate('/createtype') }}>Создать новую категорию</Button>
                {data?.types && data.types.map(type => {
                    return <TypeCard
                        deleteType={deleteType}
                        type={type}
                        key={type._id}
                    />
                })}
            </>}
        />
    </>
}

export default Body