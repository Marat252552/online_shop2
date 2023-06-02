import FilterBar from "../../../Widgets/FilterBar"
import LargeModuleTemplate from "../../Modules/LargeModuleTemplate"
import styles from './lib/styles.module.css'
import { Props_T } from "./lib/types"


const FilterBodyTemplate = ({elements, listModule}: Props_T) => {
    return <>
        <LargeModuleTemplate>
            <div className={styles.container}>
                <FilterBar elements={elements}/>
                <div className={styles.list_module}>
                    {listModule}
                </div>
            </div>
        </LargeModuleTemplate>
    </>
}

export default FilterBodyTemplate