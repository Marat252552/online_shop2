import { useNavigate } from 'react-router-dom'
import LogoutButton from '../../../../../../Features/LogoutButton'
import ActiveSpan from '../../../../../../UI/ActiveSpan'
import sharedStyles from './../../../../../../Shared/styles.module.css'
import styles from './lib/styles.module.css'

const AdminNormalVersion = () => {
    let links = [
        {value: 'Контроль доступа', url: '/accesscontrol'}
    ]
    let navigate = useNavigate()
    return <div className={sharedStyles.visible_on_fullscreen_version}>
        <div className={styles.container}>

            <div style={{fontSize: '30px'}}>ADMIN</div>

            <div>
                {links.map(link => {
                    return <ActiveSpan onClick={() => {navigate(link.url)}}>{link.value}</ActiveSpan>
                })}
            </div>

            <div>
                <LogoutButton />
            </div>

        </div>
    </div>
}

export default AdminNormalVersion