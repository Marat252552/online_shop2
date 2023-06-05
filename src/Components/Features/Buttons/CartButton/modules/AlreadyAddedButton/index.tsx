import { Spin } from 'antd'
import styles from './lib/styles.module.css'
import { LoadingOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'


const AlreadyAddedButton = ({ amount, decrement, increment, isLoadingAdd, isLoadingRemove }: { isLoadingAdd: boolean, isLoadingRemove: boolean, increment: () => void, decrement: () => void, amount: number }) => {

    let Loading = () => <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />} />

    return <div className={styles.container}>
        {
            isLoadingAdd ?
                <Loading />
                :
                <div
                    onClick={increment}
                    className={styles.icon_module}>
                    <PlusCircleOutlined />
                </div>
        }


        <div className={styles.info_module}>В корзине {amount}</div>

        {
            isLoadingRemove ?
                <Loading />
                :
                <div
                    onClick={decrement}
                    className={styles.icon_module}>
                    <MinusCircleOutlined />
                </div>
        }


    </div>
}

export default AlreadyAddedButton