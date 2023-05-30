import styles from './lib/styles.module.css'


const BasketItemPrice = ({price}: {price: number}) => {
    return <div className={styles.container}>
        <span>{price}</span>
    </div>
}

export default BasketItemPrice