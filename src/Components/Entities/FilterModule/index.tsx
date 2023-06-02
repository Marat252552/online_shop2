import styles from './lib/styles.module.css'
import { Element_T } from '../../Shared/types' 


const FilterModule = ({elements}: {elements: Element_T[] | undefined}) => {
    return <div className={styles.container}>
        {elements && elements.map(el => <span key={el._id}>{el.name}</span>)}
    </div>
}

export default FilterModule