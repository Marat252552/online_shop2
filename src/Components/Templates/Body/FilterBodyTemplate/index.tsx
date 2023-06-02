import FilterBar from "../../../Widgets/FilterBar"
import LargeModuleTemplate from "../../Modules/LargeModuleTemplate"
import styles from './lib/styles.module.css'
import { Props_T } from "./lib/types"


const FilterBodyTemplate = ({brands, types, listModule}: Props_T) => {
    return <>
        <LargeModuleTemplate>
            <div className={styles.container}>
                <FilterBar brands={brands} types={types}/>
                <div className={styles.list_module}>
                    {listModule}
                </div>
            </div>
        </LargeModuleTemplate>
    </>
}

export default FilterBodyTemplate