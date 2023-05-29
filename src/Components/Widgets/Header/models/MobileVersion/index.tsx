import { MenuOutlined } from "@ant-design/icons"
import sharedStyles from './../../../../Shared/styles.module.css'
import styles from './lib/styles.module.css'
import {useState} from 'react'
import { Link_T } from "../../../../Shared/types"

const MobileVersion = ({links}: {links: Link_T[]}) => {
    const [isDropMenuOpen, setIsDropMenuOpen] = useState(false)
    let toggleMenu = () => {
        setIsDropMenuOpen(!isDropMenuOpen)
    }
    return <div className={sharedStyles.mobileDisplayer}>
        <div 
            onClick={toggleMenu}
            className={styles.container}>
            <MenuOutlined style={{fontSize: '25px'}}/>
        </div>
        {isDropMenuOpen && links && <div className={styles.drop_menu}>
            {links.map(link => <span style={{color: 'white'}}>{link.name}</span>)}
        </div>}
    </div>
}

export default MobileVersion