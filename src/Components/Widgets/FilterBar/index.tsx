import FilterModule from '../../Entities/FilterModule'
import styles from './lib/styles.module.css'

const FilterBar = ({ elements }: { elements: Array<{ value: string, title: string }> }) => {
    return <div className={styles.visible_on_fullscreen_version_container}>
        <FilterModule elements={elements} />
    </div>
}

export default FilterBar