import CustomSelect from '../../Entities/CustomSelect'
import styles from './lib/styles.module.css'
import { Props_T } from './lib/types'


const BrandsAndTypesFilterBar = ({ brands, types, selectedBrands, selectedTypes, setSelectedBrands, setSelectedTypes }: Props_T) => {

    return <div className={styles.visible_on_fullscreen_version_container}>
        Производители
        {brands && <CustomSelect
            placeholder='Любой производитель'
            Options={brands}
            selectedValues={selectedBrands}
            setSelectedValues={setSelectedBrands}
        />}
        Категории
        {types && <CustomSelect
            placeholder='Любая категория'
            Options={types}
            selectedValues={selectedTypes}
            setSelectedValues={setSelectedTypes}
        />}

    </div>
}

export default BrandsAndTypesFilterBar