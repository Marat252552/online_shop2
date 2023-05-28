import { Item_T } from '../../../../Shared/types'
import styles from './lib/styles.module.css'


const ItemAnnotation = ({item}: {item: Item_T}) => {
    return <div className={styles.container}>
        <span style={{color: '#C28160', fontWeight: 'bold'}}>{item.status}</span>
        <span style={{fontWeight: 'bold'}}>{item.name}</span>
        <span style={{fontWeight: 'bold'}}>{item.price}</span>
    </div>
}

export default ItemAnnotation