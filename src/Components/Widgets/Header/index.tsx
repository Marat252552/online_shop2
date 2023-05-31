import NormalVersion from "./models/NormalVersion"
import styles from './lib/styles.module.css'
import MobileVersion from "./models/MobileVersion"
import { useNavigate } from "react-router-dom"
import LargeModuleTemplate from "../../Templates/Modules/LargeModuleTemplate"
import ActiveSpan from "../../UI/ActiveSpan"
import { useAppSelector } from "../../../state/hooks"

const Header = () => {
    let {login} = useAppSelector(state => state.UserSlice)
    let navigate = useNavigate()
    let links = [
        { name: 'Goods', path: '/goods' },
        { name: 'Item', path: '/item' },
        { name: 'Login', path: '/login' }
    ]
    return <>
        <LargeModuleTemplate>
            <div className={styles.container}>
                <ActiveSpan
                    onClick={() => { navigate('/') }}
                    style={{fontSize: '20px'}}
                    >CONTROL</ActiveSpan>
                {login !== '' && <div style={{background: 'green'}}>Пользователь авторизован</div>}
                <NormalVersion links={links} />
                <MobileVersion links={links} />
            </div>
        </LargeModuleTemplate>
    </>
}

export default Header