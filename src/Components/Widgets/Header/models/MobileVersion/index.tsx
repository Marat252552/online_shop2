import { MenuOutlined } from "@ant-design/icons"
import sharedStyles from './../../../../Shared/styles.module.css'
import styles from './lib/styles.module.css'
import { useState } from 'react'
import { Link_T } from "../../../../Shared/types"
import { useNavigate } from "react-router-dom"

const MobileVersion = ({ links }: { links: Link_T[] }) => {
    let navigate = useNavigate()
    const [isDropMenuOpen, setIsDropMenuOpen] = useState(false)
    let toggleMenu = () => {
        setIsDropMenuOpen(!isDropMenuOpen)
    }
    return <div className={sharedStyles.visible_on_mobile_version}>
        <div
            className={styles.container}
        >
            <MenuOutlined
                onClick={toggleMenu}
                style={{ fontSize: '25px' }} />
        </div>
        {isDropMenuOpen && links && <div className={styles.drop_menu}>
            {links.map(link => <span
                key={link.path}
                onClick={() => { navigate(link.path) }}
                style={{ color: 'white' }}>{link.name}
            </span>)}
        </div>}
    </div>
}

export default MobileVersion