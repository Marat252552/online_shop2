import styles from './lib/styles.module.css'
import { Element_T } from './lib/types'


const FilterModule = ({elements}: {elements: Element_T[]}) => {
    return <div className={styles.container}>
        {elements.map(el => <span>{el.title}</span>)}
    </div>
}

export default FilterModule