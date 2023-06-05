import { useNavigate } from 'react-router-dom'
import { Item_T } from '../../Shared/types'
import ItemImage from '../ItemImage'
import styles from './lib/styles.module.css'
import ItemAnnotation from './models/ItemAnnotation'


const Item = ({ item }: { item: Item_T }) => {
    let navigate = useNavigate()
    return <div className={styles.container}>
        <div onClick={() => { navigate(`/goods/${item._id}`) }}>
            <ItemImage
                img_name={item?.main_img_name}
            />
        </div>
        <ItemAnnotation item={item} />
    </div>
}

export default Item