import styles from './lib/styles.module.css'


const LeftNavbar = ({children}: {children: any}) => {
    return <div className={styles.visible_on_fullscreen_version_container}>
        {children}
    </div>
}

export default LeftNavbar