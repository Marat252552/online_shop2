import CustomSelect from '../../Entities/CustomSelect'
import FilterModule from '../../Entities/FilterModule'
import styles from './lib/styles.module.css'
import { Props_T } from './lib/types'


const FilterBar = ({ brands, types }: Props_T) => {
    return <div className={styles.visible_on_fullscreen_version_container}>
        <CustomSelect />
        {/* <FilterModule elements={types}/> */}
    </div>
}

export default FilterBar