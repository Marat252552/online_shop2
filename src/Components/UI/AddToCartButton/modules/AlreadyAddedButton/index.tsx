import styles from './lib/styles.module.css'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'


const AlreadyAddedButton = ({ amount, decrement, increment }: { increment: () => void, decrement: () => void, amount: number }) => {
    return <div className={styles.container}>
        <div
            onClick={increment}
            className={styles.icon_module}>
            <PlusCircleOutlined />
        </div>

        <div className={styles.info_module}>В корзине {amount}</div>
        <div
            onClick={decrement}
            className={styles.icon_module}>
            <MinusCircleOutlined />
        </div>

    </div>
}

export default AlreadyAddedButton