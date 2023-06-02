import { Element_T } from "../../../../Shared/types"
import FilterBodyTemplate from "../../../../Templates/Body/FilterBodyTemplate"


const Body = () => {
    let elements: Element_T[] = [
        { title: 'Apple', value: 'Apple' }
    ]
    return <>
        <FilterBodyTemplate
            elements={elements}
            listModule={<div></div>}
        />
    </>
}

export default Body