import styles from './lib/styles.module.css'
import { Image } from 'antd'
import { backendURL } from '../../App/config/env'

const ScalableImage = ({img_name}: {img_name: string}) => {
    return <div className={styles.container}>
        <Image className={styles.image} src={backendURL + '/' + img_name} />
    </div>
}

export default ScalableImage