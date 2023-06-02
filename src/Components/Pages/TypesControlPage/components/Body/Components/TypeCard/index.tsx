import { Button } from "antd"
import ElementCard from "../../../../../../UI/ElementCard"
import { Type_T } from "../../../../../../Shared/types"



const TypeCard = ({ type, deleteType }: { type: Type_T, deleteType: ({ _id }: { _id: string }) => void }) => {
    return <>
        <ElementCard
            buttons={<Button onClick={() => {
                deleteType({ _id: type._id })
            }}>Удалить категорию</Button>}
            descriptions={<span>{type.name}</span>}
        />
    </>
}

export default TypeCard