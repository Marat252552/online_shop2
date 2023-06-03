import CustomSelect from '../../Entities/CustomSelect'
import BlackOvalButton from '../../UI/BlackOvalButton'
import CustomTextField from '../../UI/CustomTextField'
import LeftNavbar from '../../UI/LeftNavbar'
import styles from './lib/styles.module.css'
import { Props_T } from './lib/types'
import { useState } from 'react'


const BrandsAndTypesFilterBar = ({ brands, types, selectedBrands, selectedTypes, setSelectedBrands, setSelectedTypes, setSearchValue }: Props_T) => {

    let [middleSearchValue, setMiddleSearchValue] = useState<string>('')

    let onSearch = () => {
        setSearchValue(middleSearchValue)
    }

    return <LeftNavbar>

        <CustomTextField
            style={{ background: 'white' }}
            value={middleSearchValue}
            onChange={e => { setMiddleSearchValue(e.target.value) }}
            size='small'
            placeholder='Поиск'
        />
        <div onClick={onSearch}>
            <BlackOvalButton >Поиск</BlackOvalButton>
        </div>

        Производители
        <div className={styles.selectors_module}>

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
    </LeftNavbar>
}

export default BrandsAndTypesFilterBar