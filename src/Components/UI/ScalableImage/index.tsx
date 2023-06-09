import styles from './lib/styles.module.css'
import { Image } from 'antd'

const ScalableImage = ({img_link}: {img_link: string}) => {
    return <div className={styles.container}>
        <Image className={styles.image} src={img_link} />
    </div>
}

export default ScalableImage