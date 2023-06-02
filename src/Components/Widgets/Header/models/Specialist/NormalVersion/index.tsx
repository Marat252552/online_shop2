import { useNavigate } from 'react-router-dom'
import LogoutButton from '../../../../../Features/LogoutButton'
import ActiveSpan from '../../../../../UI/ActiveSpan'
import sharedStyles from './../../../../../Shared/styles.module.css'
import styles from './lib/styles.module.css'
import { useAppSelector } from '../../../../../../state/hooks'
import { Statuses } from '../../../../../Shared/types'

const SpecialistNormalVersion = () => {
    let { status } = useAppSelector(state => state.UserSlice.user)

    let adminLinks = [
        { value: 'Контроль доступа', url: '/accesscontrol' }
    ]
    let managerLinks = [
        { value: 'Производители', url: '/brandscontrol' },
        { value: 'Товары', url: '/itemscontrol' },
        { value: 'Категории', url: '/typescontrol' },
    ]
    let navigate = useNavigate()
    return <div className={sharedStyles.visible_on_fullscreen_version}>
        <div className={styles.container}>

            <div style={{ fontSize: '30px' }}>
                {(status === Statuses.admin) ? 'ADMIN' : 'MANAGER'}
            </div>

            <div className={styles.links_module}>
                {status === Statuses.admin && adminLinks.map(link => {
                    return <ActiveSpan
                        key={link.url}
                        onClick={() => { navigate(link.url) }}
                    >{link.value}</ActiveSpan>
                })}
                {status === Statuses.manager && managerLinks.map(link => {
                    return <ActiveSpan
                        key={link.url}
                        onClick={() => { navigate(link.url) }}
                    >{link.value}</ActiveSpan>
                })}
            </div>

            <div>
                <LogoutButton />
            </div>

        </div>
    </div>
}

export default SpecialistNormalVersion