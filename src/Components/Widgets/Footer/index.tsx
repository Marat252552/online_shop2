import styles from './lib/styles.module.css'
import sharedStyles from './../../Shared/styles.module.css'

const Footer = () => {
    return <div className={styles.container}>
        <div className={sharedStyles.max_width_container}>
            <span style={{color: 'white'}}>About us</span>
        </div>
    </div>
}

export default Footer