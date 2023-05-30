import BrandsFilterModule from '../../Entities/BrandsFilterModule'
import styles from './lib/styles.module.css'

const FilterBar = () => {
    return <div className={styles.visible_on_fullscreen_version_container}>
        <BrandsFilterModule />
    </div>
}

export default FilterBar