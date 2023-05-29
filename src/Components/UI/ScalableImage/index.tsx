import styles from './lib/styles.module.css'
import { Image } from 'antd'
import iphone13pro from './../../../Assets/Images/iphone13.png'

const ScalableImage = () => {
    return <div className={styles.container}>
        <div className={styles.square}>
            <Image className={styles.image} src={iphone13pro} />
        </div>
    </div>
}

export default ScalableImage