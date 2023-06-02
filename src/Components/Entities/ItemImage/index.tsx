import styles from './lib/styles.module.css'


const ItemImage = ({src}: {src: string}) => {
    return <div className={styles.container}>
        <div className={styles.square}>
            <img src={src} />
        </div>
    </div>
}

export default ItemImage