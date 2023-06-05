import styles from './lib/styles.module.css'
import sharedStyles from './../../Shared/styles.module.css'
import FilterButton from '../../Entities/FilterButton'
import SortbyButton from '../../Entities/SortbyButton'
import { useState } from 'react'
import BrandsAndTypesFilterBar from '../BrandsAndTypesFilterBar'
import { Props_T } from './lib/types'


const MobileFilterNavbar = ({brands, types, selectedBrands, selectedTypes, setSelectedBrands, setSelectedTypes, setSearchValue}: Props_T) => {

    let [isActive, setIsActive] = useState<boolean>(false)

    let toggleActive = () => {
        setIsActive(!isActive)
    }

    return <div className={sharedStyles.visible_on_mobile_version}>

        {isActive && <div className={styles.filter_container}>
            <BrandsAndTypesFilterBar
                brands={brands}
                types={types}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedTypes={selectedTypes}
                setSelectedTypes={setSelectedTypes}
                setSearchValue={setSearchValue}
            />
        </div>}

        <div className={styles.buttons_container}>
            <div onClick={toggleActive}>
                <FilterButton />
            </div>

            <SortbyButton />
        </div>

    </div>
}

export default MobileFilterNavbar