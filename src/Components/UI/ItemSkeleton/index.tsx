import SkeletonImage from 'antd/es/skeleton/Image'
import styles from './lib/styles.module.css'
import { Skeleton } from 'antd'


const ItemSkeleton = () => {
    return <div className={styles.container}>
        <div style={{width: '100%'}}>
            <SkeletonImage active  />
        </div>

        <Skeleton active/>
    </div>
}

export default ItemSkeleton