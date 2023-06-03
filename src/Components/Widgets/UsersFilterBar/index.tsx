import CustomSelect from '../../Entities/CustomSelect'
import styles from './lib/styles.module.css'
import { Props_T } from './lib/types'


const StatusesFilterBar = ({ statuses, selectedStatuses, setSelectedStatuses }: Props_T) => {

    return <div className={styles.visible_on_fullscreen_version_container}>
        Статус
        {statuses && <CustomSelect
            placeholder='Любой производитель'
            Options={statuses}
            selectedValues={selectedStatuses}
            setSelectedValues={setSelectedStatuses}
        />}

    </div>
}

export default StatusesFilterBar