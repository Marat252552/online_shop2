import { backendURL } from '../../App/config/env'
import styles from './lib/styles.module.css'


const ItemImage = ({img_name}: {img_name: string}) => {
    return <div className={styles.container}>
        <div className={styles.square}>
            <img src={backendURL + '/' + img_name} />
        </div>
    </div>
}

export default ItemImage