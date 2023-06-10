import styles from './lib/styles.module.css'
import MobileFilterNavbar from '../../../../Widgets/MobileFilterNavbar'
import LargeModuleTemplate from '../../../../Templates/Modules/LargeModuleTemplate'
import BrandsAndTypesFilterBar from '../../../../Widgets/BrandsAndTypesFilterBar'
import RestAPI from '../../../../../API/RestAPI'
import { useState } from 'react'
import Item from '../../../../Entities/Item'
import VisibleOnFullscreenVersion from '../../../../Templates/VisibilityModules/VisibleOnFullscreenVersion'
import ItemSkeleton from '../../../../UI/ItemSkeleton'


const Body = () => {

    let { data: brandsData } = RestAPI.useGetBrandsQuery()
    let { data: typesData } = RestAPI.useGetTypesQuery()

    let [selectedBrands, setSelectedBrands] = useState<string[]>([])
    let [selectedTypes, setSelectedTypes] = useState<string[]>([])
    let [searchValue, setSearchValue] = useState<string>('')

    let { data: itemsData, isLoading, isError } = RestAPI.useGetItemsQuery({ brands: selectedBrands, types: selectedTypes, searchValue })

    return <>
        <LargeModuleTemplate>
            <div className={styles.container}>

                <VisibleOnFullscreenVersion>
                    <BrandsAndTypesFilterBar
                        brands={brandsData?.brands}
                        types={typesData?.types}
                        selectedBrands={selectedBrands}
                        setSelectedBrands={setSelectedBrands}
                        selectedTypes={selectedTypes}
                        setSelectedTypes={setSelectedTypes}
                        setSearchValue={setSearchValue}
                    />
                </VisibleOnFullscreenVersion>


                <div className={styles.items_module_container}>
                    <MobileFilterNavbar
                        brands={brandsData?.brands}
                        types={typesData?.types}
                        selectedBrands={selectedBrands}
                        setSelectedBrands={setSelectedBrands}
                        selectedTypes={selectedTypes}
                        setSelectedTypes={setSelectedTypes}
                        setSearchValue={setSearchValue}
                    />
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', width: '100%' }}>
                        {itemsData && itemsData?.items.map(item => <Item item={item} />)}
                        {isLoading && <>
                        <ItemSkeleton />
                        <ItemSkeleton />
                        <ItemSkeleton />
                        </>}
                        {isError && <h1>Ошибка подключения к серверу</h1>}
                    </div>
                </div>

            </div>
        </LargeModuleTemplate>
    </>
}

export default Body