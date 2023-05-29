import HeaderSearchInput from '../../../../UI/HeaderSearchInput'
import styles from './lib/styles.module.css'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import sharedStyles from './../../../../Shared/styles.module.css'
import { Link_T } from '../../../../Shared/types'
import { useNavigate } from 'react-router-dom'

const NormalVersion = ({links}: {links: Link_T[]}) => {
    let navigate = useNavigate()
    return <div className={sharedStyles.visible_on_fullscreen_version}>
        <div className={styles.container}>

            <div className={styles.navbar_first_half}>
                {links && links.map(link => <span key={link.path} onClick={() => navigate(link.path)}>{link.name}</span>)}
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