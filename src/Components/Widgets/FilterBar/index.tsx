import BrandsFilterModule from '../../Entities/BrandsFilterModule'
import styles from './lib/styles.module.css'
import sharedStyles from './../../Shared/styles.module.css'

const FilterBar = () => {

    return <div className={sharedStyles.visible_on_fullscreen_version}>
        <div className={styles.container}>
            <BrandsFilterModule />
        </div>
    </div>
}

export default FilterBar