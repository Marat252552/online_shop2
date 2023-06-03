import LargeModuleTemplate from "../../Modules/LargeModuleTemplate"
import styles from './lib/styles.module.css'
import { Props_T } from "./lib/types"


const FilterBodyTemplate = ({ listModule, navbarModule }: Props_T) => {
    return <>
        <LargeModuleTemplate>
            <div className={styles.container}>
                {navbarModule}
                <div className={styles.list_module}>
                    {listModule}
                </div>
            </div>
        </LargeModuleTemplate>
    </>
}

export default FilterBodyTemplate