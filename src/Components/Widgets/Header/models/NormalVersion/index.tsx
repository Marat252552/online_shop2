import HeaderSearchInput from '../../../../UI/HeaderSearchInput'
import styles from './lib/styles.module.css'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import sharedStyles from './../../../../Shared/styles.module.css'
import { Link_T } from '../../../../Shared/types'

const NormalVersion = ({links}: {links: Link_T[]}) => {
    return <div className={sharedStyles.mainDisplayer}>
        <div className={styles.container}>

            <div className={styles.navbar_first_half}>
                {links && links.map(link => <span>{link.name}</span>)}
            </div>

            <div className={styles.navbar_second_half}>
                <HeaderSearchInput />
                <HeartOutlined />
                <ShoppingCartOutlined />
            </div>

        </div>
    </div>

}

export default NormalVersion