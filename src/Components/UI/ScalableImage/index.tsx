import styles from './lib/styles.module.css'
import { Image } from 'antd'
import iphone13pro from './../../../Assets/Images/iphone13.png'
import ItemImage from '../../Entities/ItemImage'

const ScalableImage = () => {
    return <div className={styles.container}>
        <Image className={styles.image} src={iphone13pro} />
    </div>
}

export default ScalableImage