import styles from './lib/styles.module.css'
import { useNavigate } from "react-router-dom"
import LargeModuleTemplate from "../../Templates/Modules/LargeModuleTemplate"
import ActiveSpan from "../../UI/ActiveSpan"
import UserNormalVersion from './models/User/NormalVersion'
import UserMobileVersion from './models/User/MobileVersion'
import { useAppSelector } from '../../../state/hooks'
import { Statuses } from '../../Shared/types'
import SpecialistNormalVersion from './models/Specialist/NormalVersion'


const Header = () => {
    const { status } = useAppSelector(state => state.UserSlice.user)
    let navigate = useNavigate()
    let links = [
        { name: 'Товары', path: '/goods' }
    ]
    return <>
        <LargeModuleTemplate>
            <div className={styles.container}>

                <ActiveSpan
                    onClick={() => { navigate('/') }}
                    style={{ fontSize: '20px' }}
                >CONTROL</ActiveSpan>

                {status === Statuses.user && <div style={{ width: '100%' }}>
                    <UserNormalVersion links={links} />
                    <UserMobileVersion links={links} />
                </div>}

                {status !== Statuses.user && <div style={{ width: '100%' }}>
                    <SpecialistNormalVersion />
                </div>}

            </div>
        </LargeModuleTemplate>
    </>
}

export default Header