import styles from './lib/styles.module.css'
import sharedStyles from './../../Shared/styles.module.css'
import FilterButton from '../../Entities/FilterButton'
import SortbyButton from '../../Entities/SortbyButton'


const MobileFilterNavbar = () => {
    return <div className={sharedStyles.visible_on_mobile_version}>
        <div className={styles.buttons_container}>
            <FilterButton />
            <SortbyButton />
        </div>
    </div>
}

export default MobileFilterNavbar