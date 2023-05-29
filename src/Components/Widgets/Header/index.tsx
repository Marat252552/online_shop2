import NormalVersion from "./models/NormalVersion"
import sharedStyles from './../../Shared/styles.module.css'
import styles from './lib/styles.module.css'
import MobileVersion from "./models/MobileVersion"
import { useNavigate } from "react-router-dom"

const Header = () => {
    let navigate = useNavigate()
    let links = [
        {name: 'Goods', path: '/goods'}
    ]
    return <div className={sharedStyles.max_width_container}>
        <div className={styles.container}>
            <div 
                onClick={() => {navigate('/')}}
                className={styles.logo}>
                CONTROL
            </div>
            <NormalVersion links={links}/>
            <MobileVersion links={links}/>
        </div>
    </div>
}

export default Header