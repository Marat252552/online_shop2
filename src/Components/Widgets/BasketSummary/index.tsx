import JustLine from '../../UI/JustLine'
import Specification from './Models/Specification'
import styles from './lib/styles.module.css'
import BlackOvalButton from '../../UI/BlackOvalButton'
import SkeletonInput from 'antd/es/skeleton/Input'
import { BasketSummary_T } from './lib/types'


const BasketSummary: BasketSummary_T = ({ subtotal, total, delivery }) => {
    
    return <div className={styles.container}>
        <h3>Summary</h3>
        <div className={styles.main_info_module}>
            <Specification feature='Subtotal' value={subtotal || <SkeletonInput active size='small'/>} />
            <Specification feature='Estimated delivery' value={delivery || <SkeletonInput active size='small'/>} />
            <JustLine />
            <Specification feature='Total' value={total || <SkeletonInput active size='small'/>} isValueBold={true} />
        </div>
        <BlackOvalButton>
            Order
        </BlackOvalButton>
    </div>
}

export default BasketSummary