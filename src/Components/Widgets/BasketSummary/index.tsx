import JustLine from '../../UI/JustLine'
import Specification from './Models/Specification'
import styles from './lib/styles.module.css'
import BlackOvalButton from '../../UI/BlackOvalButton'
import SkeletonInput from 'antd/es/skeleton/Input'
import { BasketSummary_T } from './lib/types'
import { useEffect, useState } from 'react'
import { getItemAPI } from '../../../API/AxiosAPI'


const BasketSummary: BasketSummary_T = ({ cart_items, error }) => {

    let delivery = 0

    let [total, setTotal] = useState<number>(0)

    let [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!cart_items) return

        let asyncFunct = async () => {
            setLoading(true)
            let a = 0
            for await (const cart_item of cart_items!) {
                let { item_id, amount } = cart_item
                try {
                    let response = await getItemAPI({ _id: item_id })
                    console.log(response.data.item)
                    let { price } = response.data.item
                    a = a + (price * amount)
                } catch (e) {
                    console.log(e)
                }
            }
            setTotal(a)
            setLoading(false)
        }
        asyncFunct()
    }, [cart_items])
    // @ts-ignore
    if (error?.status) {
        return <div className={styles.container}>
            <h3>Корзина</h3>
            <div className={styles.main_info_module}>
                <Specification feature='Промежуточный итог' value={'0₽'} />
                <Specification feature='Доставка' value={'0₽'} />
                <JustLine />
                <Specification feature='Итого' value={'0₽'} isValueBold={true} />
            </div>
            <BlackOvalButton>
                Далее
            </BlackOvalButton>
        </div>
    }

    return <div className={styles.container}>
        <h3>Корзина</h3>
        <div className={styles.main_info_module}>
            <Specification feature='Промежуточный итог' value={(loading) ? <SkeletonInput active size='small' /> : total + '₽'} />
            <Specification feature='Доставка' value={delivery + '₽'} />
            <JustLine />
            <Specification feature='Итого' value={(loading) ? <SkeletonInput active size='small' /> : total + '₽'} isValueBold={true} />
        </div>
        <BlackOvalButton>
            Далее
        </BlackOvalButton>
    </div>
}

export default BasketSummary