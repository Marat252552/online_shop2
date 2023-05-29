import NormalVersion from "./models/NormalVersion"
import sharedStyles from './../../Shared/styles.module.css'
import styles from './lib/styles.module.css'
import MobileVersion from "./models/MobileVersion"

const Header = () => {
    let links = [
        {name: 'New & Feature'},
        {name: 'Kids'},
        {name: 'Sale'},
        {name: 'Other'}
    ]
    return <div className={sharedStyles._container}>
        <div className={styles.container}>
            <div className={styles.logo}>
                CONTROL
            </div>
            <NormalVersion links={links}/>
            <MobileVersion links={links}/>
        </div>
    </div>
}

export default Header