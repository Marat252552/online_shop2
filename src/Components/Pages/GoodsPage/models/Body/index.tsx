import styles from './lib/styles.module.css'
import MobileFilterNavbar from '../../../../Widgets/MobileFilterNavbar'
import LargeModuleTemplate from '../../../../Templates/Modules/LargeModuleTemplate'
import BrandsAndTypesFilterBar from '../../../../Widgets/BrandsAndTypesFilterBar'
import RestAPI from '../../../../../API/RestAPI'
import { useState } from 'react'
import Item from '../../../../Entities/Item'


const Body = () => {

    let { data: brandsData } = RestAPI.useGetBrandsQuery()
    let { data: typesData } = RestAPI.useGetTypesQuery()

    let [selectedBrands, setSelectedBrands] = useState<string[]>([])
    let [selectedTypes, setSelectedTypes] = useState<string[]>([])
    let [searchValue, setSearchValue] = useState<string>('')

    let { data: itemsData } = RestAPI.useGetItemsQuery({ brands: selectedBrands, types: selectedTypes, searchValue })

    return <>
        <LargeModuleTemplate>
            <div className={styles.container}>

                <BrandsAndTypesFilterBar
                    brands={brandsData?.brands}
                    types={typesData?.types}
                    selectedBrands={selectedBrands}
                    setSelectedBrands={setSelectedBrands}
                    selectedTypes={selectedTypes}
                    setSelectedTypes={setSelectedTypes}
                    setSearchValue={setSearchValue}
                />

                <div className={styles.items_module_container}>
                    <MobileFilterNavbar />
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
                        {itemsData && itemsData?.items.map(item => <Item item={item} />)}
                    </div>
                </div>
                
            </div>
        </LargeModuleTemplate>
    </>
}

export default Body