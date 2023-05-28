import HeaderSearchInput from '../../../../UI/HeaderSearchInput'
import styles from './lib/styles.module.css'
import {HeartOutlined, ShoppingCartOutlined} from '@ant-design/icons'

const NormalVersion = () => {
    return <div className={styles.container}>

        <div className={styles.logo}>
            CONTROL
        </div>

        <div className={styles.text_module}>
            <div>New & Feature</div>
            <div>Men & Women</div>
            <div>Kids</div>
            <div>Sale</div>
            <div>Other</div>
        </div>

        <div className={styles.end_of_navbar}>
            <HeaderSearchInput />
            <HeartOutlined />
            <ShoppingCartOutlined />
        </div>

    </div>
}

export default NormalVersion