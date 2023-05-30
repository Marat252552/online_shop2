import { Button } from 'antd'
import JustLine from '../../UI/JustLine'
import Specification from './Models/Specification'
import styles from './lib/styles.module.css'
import BlackOvalButton from '../../UI/BlackOvalButton'


const BasketSummary = () => {
    return <div className={styles.container}>
        <h3>Summary</h3>
        <div className={styles.main_info_module}>
            <Specification feature='Subtotal' value='20000'/>
            <Specification feature='Estimated delivery' value='Free'/>
            <JustLine />
            <Specification feature='Total' value='20000' />
        </div>
        <BlackOvalButton />
    </div>
}

export default BasketSummary