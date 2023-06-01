import NormalVersion from "./models/NormalVersion"
import styles from './lib/styles.module.css'
import MobileVersion from "./models/MobileVersion"
import { useNavigate } from "react-router-dom"
import LargeModuleTemplate from "../../Templates/Modules/LargeModuleTemplate"
import ActiveSpan from "../../UI/ActiveSpan"


const Header = () => {
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
                <NormalVersion links={links} />
                <MobileVersion links={links} />
            </div>
        </LargeModuleTemplate>
    </>
}

export default Header