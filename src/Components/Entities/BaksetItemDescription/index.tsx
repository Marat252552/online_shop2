import { DeleteOutlined, HeartOutlined } from '@ant-design/icons'
import styles from './lib/styles.module.css'
import TextAndIconButton from '../../Shared/models/TextAndIconButton'


const BasketItemDescription = () => {
    return <div className={styles.main_container}>
        <div className={styles.text_module_container}>
            <div style={{fontWeight: 'bold'}}>Iphone 12</div>
            <span>By Apple</span>
        </div>
        
        <div className={styles.buttons_module_container}>
            <TextAndIconButton Icon={HeartOutlined} />
            <TextAndIconButton Icon={DeleteOutlined}/>
        </div>
    </div>
}

export default BasketItemDescription