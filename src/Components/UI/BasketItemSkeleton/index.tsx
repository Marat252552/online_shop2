import { Skeleton } from "antd"
import SkeletonImage from "antd/es/skeleton/Image"
import styles from './lib/styles.module.css'


const BasketItemSkeleton = () => {
    return <div className={styles.container}>
        <SkeletonImage active/>
        <Skeleton active/>
    </div>
}

export default BasketItemSkeleton