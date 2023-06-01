import HeaderSearchInput from '../../../../../UI/HeaderSearchInput'
import styles from './lib/styles.module.css'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import sharedStyles from './../../../../../Shared/styles.module.css'
import { Link_T } from '../../../../../Shared/types'
import { useNavigate } from 'react-router-dom'
import ActiveSpan from '../../../../../UI/ActiveSpan'
import LogoutButton from '../../../../../Features/LogoutButton'
import { useAppSelector } from '../../../../../../state/hooks' 


const UserNormalVersion = ({links}: {links: Link_T[]}) => {
    let { token } = useAppSelector(state => state.UserSlice)

    let navigate = useNavigate()
    return <div className={sharedStyles.visible_on_fullscreen_version}>
        <div className={styles.container}>

            <div className={styles.navbar_first_half}>
                {links && links.map(link => <ActiveSpan key={link.path} onClick={() => navigate(link.path)}>{link.name}</ActiveSpan>)}
                {token === '' && <ActiveSpan key={'login'} onClick={() => navigate('/login')}>Login</ActiveSpan>}
            </div>

            <div className={styles.navbar_second_half}>
                <HeaderSearchInput />
                <HeartOutlined />
                <ShoppingCartOutlined onClick={() => {navigate('/basket')}} />
                {token !== '' && <LogoutButton />}
            </div>

        </div>
    </div>

}

export default UserNormalVersion